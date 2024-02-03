// sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Examples:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


// add whatever parameters you deem necessary

function makeFrequencyMap(num){
    // count the frequency of each letter in the string and create a Map from the result
    // 'hello' => {h:1, e:1, l:2, o:1}
    let frequencies = new Map();
    console.log(String(num))
    for(let digit of String(num).split('')){
        let digitCount = frequencies.get(digit) || 0
        frequencies.set(digit, digitCount + 1)
    }
    console.log('freqs:',num,'==>', frequencies)
    return frequencies
}



function sameFrequency(num1, num2) {
    if(String(num1).length != String(num2).length) return false

    let num1Freq = makeFrequencyMap(num1)
    let num2Freq = makeFrequencyMap(num2)

    // console.log(num1Freq,num2Freq)

    for(let [key,val] of num1Freq){
        if (val !== num2Freq.get(key) ) return false
    }
    return true
}


module.exports = sameFrequency