// process.env.NODE_ENV = "test";
// const request = require("supertest");

// const app = require("../app");
// let cats = require("../fakeDb");


// let pickles = { name: "Pickles" };

// beforeEach(function () {
//   cats.push(pickles);
// });

// afterEach(function () {
//   // make sure this *mutates*, not redefines, `cats`
//   cats.length = 0;
// });

// describe("GET /cats", () => {
//   test("Get all cats", async () => {
//     const res = await request(app).get("/cats");
//     expect(res.statusCode).toBe(200)
//     expect(res.body).toEqual({ cats: [pickles] })
//   })
// })

// describe("GET /cats/:name", () => {
//   test("Get cat by name", async () => {
//     const res = await request(app).get(`/cats/${pickles.name}`);
//     expect(res.statusCode).toBe(200)
//     expect(res.body).toEqual({ cat: pickles })
//   })
//   test("Responds with 404 for invalid cat", async () => {
//     const res = await request(app).get(`/cats/icecube`);
//     expect(res.statusCode).toBe(404)
//   })
// })

// describe("POST /cats", () => {
//   test("Creating a cat", async () => {
//     const res = await request(app).post("/cats").send({ name: "Blue" });
//     expect(res.statusCode).toBe(201);
//     expect(res.body).toEqual({ cat: { name: "Blue" } });
//   })
//   test("Responds with 400 if name is missing", async () => {
//     const res = await request(app).post("/cats").send({});
//     expect(res.statusCode).toBe(400);
//   })
// })

// describe("/PATCH /cats/:name", () => {
//   test("Updating a cat's name", async () => {
//     const res = await request(app).patch(`/cats/${pickles.name}`).send({ name: "Monster" });
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toEqual({ cat: { name: "Monster" } });
//   })
//   test("Responds with 404 for invalid name", async () => {
//     const res = await request(app).patch(`/cats/Piggles`).send({ name: "Monster" });
//     expect(res.statusCode).toBe(404);
//   })
// })

// describe("/DELETE /cats/:name", () => {
//   test("Deleting a cat", async () => {
//     const res = await request(app).delete(`/cats/${pickles.name}`);
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toEqual({ message: 'Deleted' })
//   })
//   test("Responds with 404 for deleting invalid cat", async () => {
//     const res = await request(app).delete(`/cats/hamface`);
//     expect(res.statusCode).toBe(404);
//   })
// })

process.env.NODE_ENV = 'test'

const request = require('supertest')

const app = require('../app')
let cats = require('../fakeDb')

let pickles = {name:'Pickles'}

beforeEach(function() {
  cats.push(pickles)
})

afterEach(function() {
  cats.length = 0
})

describe('GET /cats', ()=> {
  test("Geta all cats", async ()=>
  {
    const res = await request(app).get('/cats') //should return a response obect with a status code
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({cats: [pickles]})
  })
})

describe('GET /cats/name', ()=> {
  test("Get cats by name", async ()=>
  {
    const res = await request(app).get(`/cats/${pickles.name}`) //should return a response obect with a status code
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({cat:pickles})
  })
  test("Respond with 404 for invalid cat", async ()=>
  {
    const res = await request(app).get('/cats/badcatter') //should return a response obect with a status code
    expect(res.statusCode).toBe(404)
  
  })
})


describe("POST /cats", () => {
  test('creating a cat', async ()=> {
    // Make the post requst name:"blue" to /cats
    const res = await request(app).post('/cats').send({name:'Blue'});
  
    expect(res.statusCode).toBe(201)
    // test to see if the response has cat: name:blue
    expect(res.body).toEqual({cat:{name: "Blue"}}) //or something besides cat

  })
  test('400 if name is missing', async ()=> {
    // Make the post requst name:"blue" to /cats
    const res = await request(app).post('/cats').send({});
    // Expecting a 400 response if trying to create a cat with no name
    expect(res.statusCode).toBe(400)
  } )
})

describe("/Patch /cats/:name", ()=>{
  test('Updating a cats name', async () => {
    const res = await request(app).patch(`/cats/${pickles.name}`).send({name:"monster"});
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(({cat: {name:"monster"}}))
  })
  test('Responds with 404 for invalid cat name', async ()=> {
    const res = await request(app).patch(`/cats/Piggles`).send({ name:'Monster'});
    expect(res.statusCode).toBe(404)
  })
})
describe('/delete /cats/:name', ()=>{
  test('deleting a cat', async () =>{
    const res = await request(app).delete(`/cats/${pickles.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({message:'Deleted'})
  })
})

describe('/Delete /cats/:name', () => {
  test("Responds with 404 for deleting invalid cat", async ()=> {
    const res = await request(app).delete('/cats/rogercat');
    expect(res.statusCode).toBe(404)
    }) 
})