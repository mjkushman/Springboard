

function binarySearch(arr,target) {

    let leftIndex = 0
    let rightIndex = arr.length - 1;
    
    while (leftIndex <= rightIndex ){
        
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        let middleVal = arr[middleIndex];
        
        if(middleVal < target ) {
        
            leftIndex = middleIndex + 1;
        } else if (middleVal > target){
        
            rightIndex = middleIndex -1;
        } else {
        
            return middleIndex;
        }
    }


    return -1;
}