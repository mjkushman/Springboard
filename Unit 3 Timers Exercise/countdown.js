//Write a function called countdown that accepts a number as a parameter 
//and every 1000 milliseconds decrements the value and console.logs it. 
//Once the value is 0 it should log “DONE!” and stop.


function countDown(num) {
    console.log(`Starting timer for ${num} seconds`);
    let timerId = setInterval(function() {
        if (num > 0) {
            console.log(num);
            num -= 1;
        } else {
            console.log("done!");
            clearInterval(timerId);
          }
        }, 1000)
    }
    

countDown(5);