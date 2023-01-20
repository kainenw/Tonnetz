import getFreq from "../pitch.js"


const generateTone = (num, decayTime = 1, waveType = 'sine') => {
	const freq = getFreq(num)
	const context = new AudioContext()
	const o = context.createOscillator()
	const  g = context.createGain()
	o.type = waveType

  //connect to output
	o.connect(g)
	g.connect(context.destination)

	//frequency
	o.frequency.value = freq;
	//gain
	g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
	
	o.start()
}

export default generateTone;
