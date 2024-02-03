// separatePositive
// Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).
// Examples:
// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]


// add whatever parameters you deem necessary
function separatePositive(numsArray) {
    console.log('starting with ',numsArray)
    // create a new array filtered down to negatives only
    // iterate through original and remove all negatives
    // spread the new array back into the original array
    let iCount = 0

    for(let i = 0; iCount < numsArray.length; ){
        if(numsArray[i] < 0){
            // splice the negative number out, and add it back to the end
            spliced = numsArray.splice(i,1)
            numsArray.push(...spliced) 
            iCount ++ // increase iteration count but do not increase index
            
        } else{
            i++ // increase index, and
            iCount++ // increase iteration count
            }
    }
    console.log('result:', numsArray)
    return numsArray // with positive on left, negative on right
}

module.exports = separatePositive;