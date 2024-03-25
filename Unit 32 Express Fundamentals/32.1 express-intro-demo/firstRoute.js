// const express = require('express');

// const app = express();

// app.get('/dogs', function(request, response) {
//   return response.send('Dogs go brk brk');
// });

// app.listen(3000, function(){
//   console.log('App on port 3000');
// }) 

// add express to the file
const express = require('express')

// execute express as a function and store the result in app
const app = express();
//add the next line to tell our app to parse json
app.use(express.json())
// The next line tells our app to also accept form data
app.use(express.urlencoded({extended: true}))

app.get('/dogs', (req,res)=>{
  console.log('You asked for /dogs.')
  // console.log(req)
  res.send('<h1>You got a dog</h1>') //sends the resposne back to the browser
})


app.post('/chickens',function createChicken(req,res){
  console.log(req.body)
  res.send('You made a new POST request to /chickens. BWOK')
})

app.get('/chickens',function createChicken(req,res){
  console.log(req.body)
  res.send('You made a super good get request to /chickens. BWOK')
})

const greetings = {
  en: 'hello',
  fr: 'bonjour',
  ic: 'hallo',
  jp: 'konnichiwa'
}

app.get('/hello/:language',function(req,res){
  console.log(req.params)
  let lang = req.params.language
  let greeting = greetings[lang]
  res.send(greeting)
})


app.get('/search', function(req,res){
  console.log(req.query) // returns an object of key:value pairs where key is query argument, value is argument value
  console.log('Headers are',req.headers)
  const {term,sort} = req.query
  return res.send(`SEARHC PAGE! Term is ${term} and Sort is ${sort}`)
})


const CANDIES = [
  {name:'snickers', qty:43, price: 1.50 },
  {name:'skittles', qty:22, price: 0.75 }
]

app.get('/candies',(req,res)=> {
  res.json(CANDIES)
})


app.post('/candies', (req,res) => {
  CANDIES.push(req.body)
  res.status(201).json(CANDIES)
})


app.listen(3000, function(){
  console.log('Server running on port 3000')
})