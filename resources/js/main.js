import { getNoteNum, getNoteLetter } from "./pitch.js";
import transformation from "./transformation.js";
import playTriad, { buildMaj } from "./triad.js"

let triad = { root: 48, third: 52, fifth: 55, isMajor: true }

const handleClickC = (event) => {
  console.log("hi")
	const rootNum = getNoteNum(0, 4)
	triad = buildMaj(rootNum);
	playTriad(triad)
}

const handleClickTransformation = async ( event ) => {
  triad = await transformation(triad, event.target.value)
  playTriad(triad)
}

const transformationButtons = document.getElementsByClassName('transformation')

for (let item in transformationButtons) {
  const button = transformationButtons[item]
  if(typeof button === 'object') {
    button.addEventListener('click', handleClickTransformation)
  }
}

const C = document.getElementById('C')

C.addEventListener('click', handleClickC)

