import { getNoteNum } from "./hertz.js";
import transformation from "./transformation.js";
import playTriad, { buildMaj, playNote } from "./triad.js";

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

window.addEventListener('load', () => {
  const labels = document.getElementById('note-labels').children;
  Array.from(labels).forEach(label => {
    label.addEventListener('click', () => {
      const pitchClass = Number(label.getAttribute('data-pitch'));
      const note = getNoteNum(pitchClass, 4);
      playNote(note);
      label.classList.add('state-ON');
      setTimeout(() => label.classList.remove('state-ON'), 500);
    });
  });
});
