// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds 
// and each time that a random number is picked, add 1 to a counter. 
// If the number is greater than .75, stop the timer and console.log the 
// number of tries it took before we found a number greater than .75.


let tries = 1
console.log("Generating a number between 0-1 every second until the number is greater than 0.75")
let timerId = setInterval (function() {
    let randomNum = Math.round(Math.random()*100)/100;
    console.log(`Attempt ${tries}: ${randomNum}`);
    if (randomNum > 0.75) {
        clearInterval(timerId);
        console.log(`We got it on attempt number ${tries}`);
    }
    tries += 1;
    //console.log(timerId);
}, 1000)

