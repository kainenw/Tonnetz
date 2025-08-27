import { getNoteNum, getNoteLetter } from "./hertz.js";
import transformation from "./transformation.js";
import { buildMaj, buildMin, playTriad } from "./triad.js";

let triad = { root: 48, third: 52, fifth: 55, isMajor: true };

const updateChordLabel = () => {
  const letter = getNoteLetter(triad.root);
  const note = Array.isArray(letter) ? letter[0] : letter;
  const quality = triad.isMajor ? "major" : "minor";
  const el = document.getElementById("currentChord");
  if (el) {
    el.textContent = `${note} ${quality}`;
  }
};

updateChordLabel();

// Allow other scripts (such as the Tonnetz visualizer) to update or
// retrieve the current triad selection.
window.setCurrentTriad = (t) => {
  triad = t;
  updateChordLabel();
};
window.getCurrentTriad = () => triad;

const handleClickTransformation = async (event) => {
  triad = await transformation(triad, event.target.value);
  updateChordLabel();
  playTriad(triad);
};

const transformationButtons = document.getElementsByClassName("transformation");

for (let item in transformationButtons) {
  const button = transformationButtons[item];
  if (typeof button === "object") {
    button.addEventListener("click", handleClickTransformation);
  }
}

// After the Tonnetz has been initialized, add listeners to the triad labels.
window.addEventListener("load", () => {
  const container = document.getElementById("triad-labels");

  // Use event delegation so that labels added during a rebuild remain clickable.
  container.addEventListener("click", (event) => {
    const target = event.target.closest(".major, .minor");
    if (!target) return;

    const tone = parseInt(target.dataset.tone, 10);
    const quality = target.dataset.quality;
    const root = getNoteNum(tone, 4);
    triad = quality === "major" ? buildMaj(root) : buildMin(root);
    playTriad(triad);
    updateChordLabel();

    document
      .querySelectorAll(".major.state-ON, .minor.state-ON")
      .forEach((el) => el.classList.remove("state-ON"));
    target.classList.toggle("state-ON");
  });
});
