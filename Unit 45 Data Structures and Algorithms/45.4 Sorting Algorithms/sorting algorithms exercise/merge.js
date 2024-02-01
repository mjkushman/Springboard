
// Given two sorted arrays, write a function called merge which accepts two *sorted* arrays and returns a new array with values from both arrays sorted.

// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

// Also, do not use the built in ***.sort()*** method! We’re going to use this function to implement a sort, so the helper itself shouldn’t depend on a sort.

function merge(arrayA, arrayB) {
    let result = []
    let i = 0;
    let j = 0;
    while (i < arrayA.length && j < arrayB.length) {
        // add item from A to the result and increment A's iterator
        if(arrayA[i] < arrayB[j]){
            result.push(arrayA[i])
            i++;
        } else {
            // add item from B to the result and increment B's iterator
            result.push(arrayB[j])
            j++;
        }
    }
    // Push the remainder of A to the result
    while(i < arrayA.length){
        result.push(arrayA[i])
        i++;
    }
    // Push the remainder of B to the result
    while(j < arrayB.length){
        result.push(arrayB[j])
        j++;
    }
    return result;
}


// Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. Here’s some guidance for how merge sort should work:

// - Break up the array into halves until you can compare one value with another
// - Once you have smaller sorted arrays, merge those with other sorted pairs until you are back at the full length of the array
// - Once the array is merged back together, return the merged (and sorted!) array
// - In order to implement this function, you’ll also need to implement a merge function that takes in two sorted arrays and returns a new sorted array. You implemented this function in the previous exercise, so use that function!

function mergeSort(array) {
    if(array.length <= 1) return array // it's already sorted!
    const mid = Math.floor(array.length / 2) // find mid point
    const left = mergeSort(array.slice(0,mid)) // create all the left sides, recursively
    const right = mergeSort(array.slice(mid)) // create all the right sides, recursively
    return merge(left,right); // merge left and right sides, also recursively
}

module.exports = { merge, mergeSort};