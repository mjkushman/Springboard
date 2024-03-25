// # ****Rest / Spread Operator Exercises****

// In this exercise, you’ll refactor some ES5 code into ES2015.

// ## **Given this function:**


function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}


//## ****Refactor it to use the rest operator & an arrow function:****
/* Write an ES2015 Version */

const filterOutOdds = (...nums) => nums.filter( num => num % 2 === 0);

//solution from lesson:
//const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)


// ## **findMin**

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

//My solution
const findMin = (...args) => Math.min(...args);

//Solution from lesson
//const findMin = (...args) => Math.min(...args)

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1





// ## **mergeObjects**

// Write a function called ***mergeObjects*** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

//my solution
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//solution from lesson
// const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}


// ## **doubleAndReturnArgs**

// Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

//my solution
const doubleAndReturnArgs = (arr,...args) => [...arr,...args.map(v => v*2)]

//solution from lesson
// const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]


// ## **Slice and Dice!**

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {

}
//doesn't work
//const removeRandom = (items) => [items.pop(items[Math.floor(Math.random()*(items.length))])]

const removeRandom = (items) => 


/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {

}
//My solution
const extend = (array1, array2) => [...array1,...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {

}
//my solution
const addKeyVal = (obj,key,val) => ({...obj,[key]:val})

/** Return a new object with a key removed. */

function removeKey(obj, key) {

}



//my solution
const removeKey = (obj,key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}
/** Combine two objects and return a new object. */

function combine(obj1, obj2) {

}

//my solution
const combine = (obj1,obj2) => ({...obj1,...obj2});

/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}

//my solution
const update = (obj,key,value) => {
    let newObj = {...obj}
    newObj[key] = value
    return newObj;
}


// [Solution](https://lessons.springboard.com/Solution-948d1add68944e0f862ea533db8cc962?pvs=21)