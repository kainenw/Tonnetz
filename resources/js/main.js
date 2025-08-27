import { getNoteNum } from "./hertz.js";
import transformation from "./transformation.js";
import { buildMaj, buildMin, playTriad } from "./triad.js";

let triad = { root: 48, third: 52, fifth: 55, isMajor: true };

// Allow other scripts (such as the Tonnetz visualizer) to update or
// retrieve the current triad selection.
window.setCurrentTriad = (t) => {
  triad = t;
};
window.getCurrentTriad = () => triad;

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
  const container = document.getElementById("triad-labels");

  // Use event delegation so that labels added during a rebuild remain clickable.
  container.addEventListener("click", (event) => {
    let el = event.target;

    // Text nodes don't support closest(); move to their parent element.
    if (el.nodeType === Node.TEXT_NODE) {
      el = el.parentElement;
    }

    const label = el.closest(".major, .minor");
    if (!label) return;

    const tone = Number(label.dataset.tone);
    const quality = label.dataset.quality;
    const root = getNoteNum(tone, 4);
    triad = quality === "major" ? buildMaj(root) : buildMin(root);
    playTriad(triad);

    document
      .querySelectorAll(".major.state-ON, .minor.state-ON")
      .forEach((n) => n.classList.remove("state-ON"));
    label.classList.add("state-ON");
  });
});
