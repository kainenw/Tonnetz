import { getNoteNum, getNoteLetter } from "./hertz.js";
import transformation from "./transformation.js";
import { buildMaj, buildMin, playTriad } from "./triad.js";

let triad = { root: 48, third: 52, fifth: 55, isMajor: true };

const handleClickC = (event) => {
  console.log("hi");
  const rootNum = getNoteNum(0, 4);
  triad = buildMaj(rootNum);
  playTriad(triad);
};

const handleClickTransformation = async (event) => {
  triad = await transformation(triad, event.target.value);
  playTriad(triad);
};

const transformationButtons = document.getElementsByClassName("transformation");

for (let item in transformationButtons) {
  const button = transformationButtons[item];
  if (typeof button === "object") {
    button.addEventListener("click", handleClickTransformation);
  }
}

const C = document.getElementById("C");

C.addEventListener("click", handleClickC);

// After the Tonnetz has been initialized, add listeners to the triad labels.
window.addEventListener("load", () => {
  const labels = document.querySelectorAll(".major, .minor");
  labels.forEach((label) => {
    label.addEventListener("click", (event) => {
      const tone = parseInt(event.target.dataset.tone, 10);
      const quality = event.target.dataset.quality;
      const root = getNoteNum(tone, 4);
      triad = quality === "major" ? buildMaj(root) : buildMin(root);
      playTriad(triad);

      document
        .querySelectorAll(".major.state-ON, .minor.state-ON")
        .forEach((el) => el.classList.remove("state-ON"));
      event.target.classList.toggle("state-ON");
    });
  });
});
