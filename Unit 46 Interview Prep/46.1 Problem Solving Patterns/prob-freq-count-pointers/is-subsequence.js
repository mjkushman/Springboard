// isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)



function isSubsequence(subsequence, fullString) {
    let subsequenceIndex = 0;
    let fullStringIndex = 0;
    if(!subsequence) return true;
    while(fullStringIndex < fullString.length){
        if(fullString[fullStringIndex] == subsequence[subsequenceIndex]){
            subsequenceIndex +=1;
        }
        if(subsequenceIndex == subsequence.length) return true;
        fullStringIndex += 1
    }
    return false

}

module.exports = isSubsequence;