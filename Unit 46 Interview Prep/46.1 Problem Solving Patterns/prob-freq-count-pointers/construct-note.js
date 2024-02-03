// Write a function called ***constructNote***, which accepts two strings, a message and some letters. The function should return ***true*** if the message can be built with the letters that you are given; otherwise, it should return ***false***.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:
// add whatever parameters you deem necessary

// Examples: 
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function makeFrequencyMap(string){
    // count the frequency of each letter in the string and create a Map from the result
    // 'hello' => {h:1, e:1, l:2, o:1}
    let frequencies = new Map();

    for(let char of string){
        let charCount = frequencies.get(char) || 0
        frequencies.set(char, charCount + 1)
    }
    console.log('freqs:',string,'==>', frequencies)
    return frequencies
}

function constructNote(message, letters) {
    if(!letters && message) return false
    let messageFreq = makeFrequencyMap(message) // char frequency map of message
    let lettersFreq = makeFrequencyMap(letters) // char frequency map of letters

    for(let [key,val] of messageFreq){
        console.log('letters freq.get char:', lettersFreq.get(key))
        console.log('message freq.get char:', messageFreq.get(key))
        if(lettersFreq.get(key) < messageFreq.get(key))

        return false
    }
    return true

}

module.exports = constructNote