process.env.NODE_ENV = 'test'

const request = require('supertest')

const app = require('../app')
let items = require('../fakeDb')

 let banana = {name:"Banana", price:"6.99" }
 let pizza = {name:"Pizza", price:"4.99" }
 let muffin = {name:"Muffin", price:"100"}

 // add pizza and banana to items before each test
 beforeEach(()=>{
    items.push(banana,pizza)
 })

 // empty array after each test
 afterEach(()=>{
    items.length = 0
 })

describe("GET /items", ()=> {
    test("Get all items at room /items/", async ()=> {
        // Send get requst to /items/
        const res = await request(app).get('/items')
        console.log(items)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({items:[banana,pizza]})
    })
})

describe("POST to /items", () => {
    test("Create a new item", async () => {
        // post a muffin
        const res = await request(app).post("/items").send(muffin);

        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual({added:muffin})
    })
    test("404 if item name is missing", async () => {
        const res = await request(app).post("/items").send({});
        expect(res.statusCode).toBe(400)
    })
})

describe("GET /items/:name", ()=>{
    test("Get an item by name", async ()=>{
        const res = await request(app).get('/items/Banana');

        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual(banana)
    })
    test("Return 404 if invalid name is provided", async ()=>{
        const res = await request(app).get("/items/notanitem")

        expect(res.statusCode).toBe(404)
    })
})

describe("PATCH /items/:name", ()=> {
    test("Update an item by name", async ()=>{
        const res = await request(app).patch(`/items/${banana.name}`).send({name:"banana",price:300});

        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({updated:{name:"banana",price:300}})
    })
})

describe("DELETE /items/:name", ()=> {
    test("Delete an item by name from the shopping list", async () => {
        const res = await request(app).delete(`/items/${pizza.name}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({message:"Deleted"})
    })
    test("Trying to delete an item with invalid name returns 404", async ()=> {
        const res = await request(app).delete('/items/fhweoiuhfowehfu');

        expect(res.statusCode).toBe(404)
    })
})