/* //12th root of 12
const semitone = Math.pow(12, 1/12);
const referenceFreq = 440;
const referenceNum = 49;

const getFrequency = (noteNum) => {
	const semitonesFromA4 = noteNum - A4Num;
	const ratio = Math.pow(semitone, semitonesFromA4);
	const freq = referenceFreq * ratio;
	return freq;
} 


//calculate twelve-tone equal temperament
const twelfthRootOfTwo = Math.pow(2,1/12);

//refers to A4
const refNum = 49
//refers to 440 Hz
const refFreq = 440

const equalTemperamentCalculation = (n) => {
    const targetRef = n - 49 
    const freq = Math.pow(twelfthRootOfTwo, targetRef)
    return freq;
}

let noteFreq = [];*/


//frequencies from markgg/notevalues.js on Github
const noteValues = [
	{
		'C0': 16.35,
		'C1': 32.70,
		'C2': 65.41,
		'C3': 130.81,
		'C4': 261.63,
		'C5': 523.25,
		'C6': 1046.50,
		'C7': 2093.00,
		'C8': 4186.01
	},
	{
		'C#0': 17.32,
		'C#1': 34.65,
		'C#2': 69.30,
		'C#3': 138.59,
		'C#4': 277.18,
		'C#5': 554.37,
		'C#6': 1108.73,
		'C#7': 2217.46,
	},
	{
		'D0': 18.35,
		'D1': 36.71,
		'D2': 73.42,
		'D3': 146.83,
		'D4': 293.66,
		'D5': 587.33,
		'D6': 1174.66,
		'D7': 2349.32,
	},
	{
		'D#0': 19.45,
		'D#1': 38.89,
		'D#2': 77.78,
		'D#3': 155.56,
		'D#4': 311.13,
		'D#5': 622.25,
		'D#6': 1244.51,
		'D#7': 2489.02,
	},
	{
		'E0': 20.60,
		'E1': 41.20,
		'E2': 82.41,
		'E3': 164.81,
		'E4': 329.63,
		'E5': 659.26,
		'E6': 1318.51,
		'E7': 2637.02,
	},
	{
		'F0': 21.83,
		'F1': 43.65,
		'F2': 87.31,
		'F3': 174.61,
		'F4': 349.23,
		'F5': 698.46,
		'F6': 1396.91,
		'F7': 2793.83,
	},
	{
		'F#0': 23.12,
		'F#1': 46.25,
		'F#2': 92.50,
    	'F#3': 185.00,
		'F#4': 369.99,
		'F#5': 739.99,
		'F#6': 1479.98,
		'F#7': 2959.96,
	},
	{
		'G0': 24.50,
		'G1': 49.00,
		'G2': 98.00,
		'G3': 196.00,
		'G4': 392.00,
		'G5': 783.99,
		'G6': 1567.98,
    	'G7': 3135.96,
	},
	{
		'G#0': 25.96,
		'G#1': 51.91,
		'G#2': 103.83, 
		'G#3': 207.65,
		'G#4': 415.30,
		'G#5': 830.61,
		'G#6': 1661.22,
    	'G#7': 3322.44,
	},
	{
		'A0': 27.5,
		'A1': 55,
		'A2': 110,
		'A3': 220,
		'A4': 440,
		'A5': 660,
		'A6': 880,
		'A7': 1760,
		'A8': 3520
	},
	{
		'A#0': 29.14,
		'A#1': 58.27,
		'A#2': 116.54, 
		'A#3': 233.08,
		'A#4': 466.16, 
		'A#5': 932.33,
		'A#6': 1864.66,
    	'A#7': 3729.31,
	},
	{
		'B0': 30.87,
		'B1': 61.74,
		'B2': 123.47,
		'B3': 246.94,
		'B4': 493.88,
		'B5': 987.77,
		'B6': 1975.53,
		'B7': 3951.07,
	},
]

//note must be referred to as an integer mod 0-11
const getFreq = (note, oct) => {
	const pitchClass = noteValues[note];
	const pitch = pitchClass[oct];
	return pitch;
}

export default getFreq;