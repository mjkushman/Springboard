// Given a sorted array and a number, write a function called ***sortedFrequency*** that counts the occurrences of the number in the array

// **Constraints**:

// Time Complexity: O(log N)

// Examples:
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

function sortedFrequency(arr,num) {
    let firstIdx = findFirst(arr,num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr,num);
    return lastIdx - firstIdx +1;

}

module.exports = sortedFrequency


function findFirst(arr,lowIdx = 0, highIdx = arr.length -1) {
    if(highIdx >=lowIdx) {
        let midIdx = lowIdx + Math.floor((highIdx-lowIdx) /2) // find the middle index
        //check to see if the next index is lesser
        if (arr[midIdx - 1] < num && arr[midIdx] === num) { 
            //found it, return the index
            return midIdx; 
        } else if (arr[midIdx] > num){
            return findFirst(arr, midIdx+1, highIdx) //searh upper half
        }
        return findFirst(arr,lowIdx,midIdx-1) // search lower half
    }
    return -1
}
function findLast(arr,lowIdx = 0, highIdx = arr.length -1) {
    if(highIdx >=lowIdx) {
        let midIdx = lowIdx + Math.floor((highIdx-lowIdx) /2) //find the middle index
        //check to see if the next index is greater
        if (arr[midIdx + 1] > num && arr[midIdx] === num) { 
            //found it, return the index
            return midIdx; 
        } else if (arr[midIdx] < num){
            return findFirst(arr, midIdx+1, highIdx) //searh upper half
        }
        return findFirst(arr,lowIdx,midIdx-1) // search lower half
    }
    return -1
}