/* export const int = { //interval
    uni: 0, //unison
    m2: 1,
    M2: 2,
    m3: 3,
    M3: 4,
    P4: 5,
    A4: 6, //augmented 4th
    D5: 6, //diminished 5th
    P5: 7,
    m6: 8,
    M6: 9,
    m7: 10,
    M7: 11,
    oct: 12 //octave
}

const getOct = ( num ) => {
    const oct = Math.floor(num / 12 )
    const pitchClass = num % 12
    return {
        pitchClass: pitchClass,
        oct: oct
    }
}

{ 0,
export const m2 = ( note ) => { 1,
export const M2 = ( note ) => { 2,
export const m3 = ( note ) => { 3,
export const M3 = ( note ) => { 4,
export const P4 = ( note ) => { 5,
export const A4 = ( note ) => { 6, //augmented 4th
export const D5 = ( note ) => { 6, //diminished 5th
export const P5 = ( note ) => { 7,
export const m6 = ( note ) => { 8,
export const M6 = ( note ) => { 9,
export const m7 = ( note ) => { 10,
export const M7 = ( note ) => { 11,
export const oct = ( note ) => { 12 //octave
 */