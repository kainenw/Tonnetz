const twelfthRootOfTwo = Math.pow(2, 1/12)

//refers to A4
const refNum = 49
//refers to 440 Hz
const refFreq = 440

const equalTemperamentCalculation = (n) => {
    const targetNum = n - 49 
    const freq = Math.pow(twelfthRootOfTwo, targetNum)
    return freq;
}
