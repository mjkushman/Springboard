const express = require('express');
const app = express()


app.get('/mean',(req,res)=>{

    
    let nums = req.query.nums.split(',')
    try{
        nums = nums.map(str => parseInt(str))
        
        let sum = nums.reduce((accumulator,currentNumber) => accumulator + currentNumber)
        
            
        let mean = sum/(nums.length)
        console.log('mean', mean)
    
        response = {
            operation:'mean',
            value: mean
        }
        return res.json(response)
    }
    catch(e){
        
        return res.send('nums must be numbers')
    }
})



app.get('/median',(req,res)=>{
    //parse and sort the numbers
    let nums = req.query.nums.split(',')
    let sortedNums = nums.slice().sort((a,b) => a-b);

    // find the middle of the array
    const middleIdx = Math.floor(sortedNums.length / 2);
    let median

    if(sortedNums.length % 2 === 0){
        //if array has even length, find the middle of the 2 middles
        const middleLeft = Number(sortedNums[middleIdx-1])
        const middleRight = Number(sortedNums[middleIdx])
        median = (middleLeft + middleRight)/2
        console.log(middleLeft,middleRight,median)
    }
    else{
        //array is an odd length and already has a middle
        median = sortedNums[middleIdx]
        console.log(median)
    }
    const result = {
        operation:'median',
        value: median
    };
    return res.json(result)
})


app.get('/mode',(req,res)=>{
    console.log('received request to mode')
    const numbers = req.query.nums.split(',')
    const freqMap = {}
    
    numbers.forEach(num => {
        freqMap[num] = (freqMap[num] || 0) +1;
    });

    let mode = [];
    let maxFrequency = 0;

    for(let item in freqMap){
        if (freqMap[item] > maxFrequency) {
            maxFrequency = freqMap[item];
            mode = [parseInt(item)];
        }
        else if(freqMap[item] === maxFrequency) {
            mode.push(parseInt(item))
        }
    }
    console.log('mode is', mode)

    let result = {
        operation:'mode',
        value:mode
    }
    res.json(result)
})



app.listen(3000,()=>{
    console.log('Server started')
})