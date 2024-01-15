/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    return arr.reduce(function(accumulator,currentVal){
        // console.log('before', accumulator)
        accumulator.push(currentVal[key])
        // console.log('after', accumulator)
        return accumulator
    }, [])
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
const vowels = ['a','i','u','e','o']

function vowelCount(str) {
    const arr = Array.from(str.toLowerCase()); // turn the string into a lowercase array for iteration
    return arr.reduce(function(counts,letter) { //reduce method where the accumulator will be an object
        if(vowels.includes(letter)){ // check to see if this letter is a vowel. If yes then proceed.
            // console.log(letter)
            if(counts[letter] == null){ // Check to see if the vowel already exists in the object counts
                counts[letter] = 1      // if null, then set value to 1
            } else {
                counts[letter]++        //if already the vowel already exists, increment 
            }
        } // console.log(counts,letter)
    return counts
    }, {}) // empty object to use as the accumulator
}


/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum,currentValue){
        // console.log(accum);
        currentValue[key]=value; // for the current object, set the value of key to value
        // console.log(currentValue[key]);
        // accum[key]=value;
        return accum // return the updated object to the array
    },arr)
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    return arr.reduce(function(results,value){
        if(callback(value) ==true) { // run the callback function on the current value of the array. (not on the whole array)
            // console.log('was true',value);
            results[0].push(value);
        } else if (callback(value) == false){
            // console.log('was false',value)
            results[1].push(value);
        }
        return results
    },[[],[]]) //start with an empty array of 2 arrays
}
