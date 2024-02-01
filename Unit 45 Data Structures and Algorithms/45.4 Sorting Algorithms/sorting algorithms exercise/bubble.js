// Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array.

function bubbleSort(array) {
    for(let i = 0; i < array.length; i++){
        let swapped = false
        for(let j=0; j<array.length; j++){
            if(array[j]> array[j+1]) {
                // switch them if array[j] > array[j+1]
                let temp = array[j] // store temporarily
                array[j] = array[j+1];
                array[j+1] = temp; // do the swap
                swapped = true // note there has been a swap
            }
        }
        if (!swapped) break // if there was no swap in this run, end the loop because its sorted
    }
    return array;


}
    
    

module.exports = bubbleSort;