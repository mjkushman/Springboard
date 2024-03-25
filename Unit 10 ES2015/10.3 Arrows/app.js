function double(arr) {
    return arr.map(function (val) {
        return val * 2;
    });
}

/* Write an ES2015 Version */
const double = arr => arr.map(val => val * 2);

//solution from unit:
//const double = arr => arr.map(val => val * 2);

// **Refactor the following function to use arrow functions:**
//  Replace ALL functions with arrow functions:
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);

  //solution:
  //const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)