import getFreq from "./hertz.js";
import generateTone from "./Old/tone.js";

/* export const firstInversion = ({ root, third, fifth }) => {
  fifth -= 12;
  const triad = { root, third, fifth };
  return triad;
};

export const secondInversion = ({ root, third, fifth }) => {
  third -= 12;
  fifth -= 12;
  return {
    root: root,
    third: third,
    fifth: fifth,
  };
}; */

export const buildMaj = (root) => {
  let third = root + 4;
  let fifth = root + 7;
  return {
    root: root,
    third: third,
    fifth: fifth,
    isMajor: true,
  };
};

export const buildMin = (root) => {
  let third = root + 3;
  let fifth = root + 7;
  const triad = {
    root: root,
    third: third,
    fifth: fifth,
    isMajor: false,
  };
  return triad;
};

export const playNote = (pitch) => {
  tonnetz.allNotesOff(16);
  const pitchClass = pitch % 12;
  tonnetz.noteOn(16, pitchClass);
  const synth = JZZ.synth.Tiny();
  synth.noteOn(0, pitch, 127).wait(500).noteOff(0, pitch);
  setTimeout(() => tonnetz.noteOff(16, pitchClass), 500);
};

export const playTriad = ({ root, third, fifth }) => {
  tonnetz.allNotesOff(16);
  tonnetz.noteOn(16, root % 12);
  tonnetz.noteOn(16, third % 12);
  tonnetz.noteOn(16, fifth % 12);

  const synth = JZZ.synth.Tiny();
  synth.allNotesOff(15);
  synth.noteOn(0, root, 127).wait(1000).noteOff(0, root);
  synth.noteOn(0, third, 127).wait(1000).noteOff(0, third);
  synth.noteOn(0, fifth, 127).wait(1000).noteOff(0, fifth);
  /* generateTone(root);
  generateTone(third);
  generateTone(fifth); */
};

// Expose playTriad globally so non-module scripts can trigger triads.
// This allows functions such as `detectTriangle` to invoke the same
// playback routine used elsewhere in the application.
window.playTriad = playTriad;
