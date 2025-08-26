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
