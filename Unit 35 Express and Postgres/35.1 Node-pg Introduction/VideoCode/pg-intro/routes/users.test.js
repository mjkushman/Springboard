// // Tell Node that we're in test "mode"
// process.env.NODE_ENV = 'test';
process.env.NODE_ENV = 'test'

// const request = require('supertest');
// const app = require('../app');
// const db = require('../db');

const request = require('supertest');
const app = require('../app');
const db = require('../db');



// let testUser;
// beforeEach(async () => {
//   const result = await db.query(`INSERT INTO users (name, type) VALUES ('Peanut', 'admin') RETURNING  id, name, type`);
//   testUser = result.rows[0]
// })

let testUser
beforeEach(async () => {
  const result = await db.query("INSERT INTO users (name, type) VALUES ('Jimmeny', 'admin') RETURNING id, name, type");
  testUser = result.rows[0];
})

afterEach(async () => {
  await db.query("DELETE FROM users")
})


afterAll(async () => {
  await db.end()
})

describe("HOPE IT WORKS", () => {
  test('something', () => {
    console.log(testUser);
    expect(1).toBe(1);
  })
})

// afterEach(async () => {
//   await db.query(`DELETE FROM users`)
// })

// afterAll(async () => {
//   await db.end()
// })

// describe("GET /users", () => {
//   test("Get a list with one user", async () => {
//     const res = await request(app).get('/users')
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toEqual({ users: [testUser] })
//   })
// })

//Test getting all users
describe("GET /users", ()=>{
  test("Get a list with one user", async () =>{
    const res = await request(app).get('/users')

    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({users: [testUser]})
  })
})


// describe("GET /users/:id", () => {
//   test("Gets a single user", async () => {
//     const res = await request(app).get(`/users/${testUser.id}`)
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toEqual({ user: testUser })
//   })
//   test("Responds with 404 for invalid id", async () => {
//     const res = await request(app).get(`/users/0`)
//     expect(res.statusCode).toBe(404);
//   })
// })


// Test a single user
describe("GET /users/:id", ()=>{
  test("Get a single user by id", async () =>{
    const res = await request(app).get(`/users/${testUser.id}`)

    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({user: testUser})
  })
  
  test("Get responds with 404 for invalid id", async () =>{
    const res = await request(app).get(`/users/0`)

    expect(res.statusCode).toBe(404)
  })
})






// describe("POST /users", () => {
//   test("Creates a single user", async () => {
//     const res = await request(app).post('/users').send({ name: 'BillyBob', type: 'staff' });
//     expect(res.statusCode).toBe(201);
//     expect(res.body).toEqual({
//       user: { id: expect.any(Number), name: 'BillyBob', type: 'staff' }
//     })
//   })
// })

//Testing create a new user
describe("POST /users", () => {
  test('test creating a new user', async ()=> {
    const res = await request(app).post('/users').send( {name: 'Mikeee', type: 'admin'} )
    expect(res.statusCode).toBe(201)
    expect(res.body).toEqual({
      user: {name: "Mikeee", type: 'admin', id: expect.any(Number)}
    })
  })
})



// describe("PATCH /users/:id", () => {
//   test("Updates a single user", async () => {
//     const res = await request(app).patch(`/users/${testUser.id}`).send({ name: 'BillyBob', type: 'admin' });
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toEqual({
//       user: { id: testUser.id, name: 'BillyBob', type: 'admin' }
//     })
//   })
//   test("Responds with 404 for invalid id", async () => {
//     const res = await request(app).patch(`/users/0`).send({ name: 'BillyBob', type: 'admin' });
//     expect(res.statusCode).toBe(404);
//   })
// })


//Test updating a user
describe("PATCH /users/:id", () => {
  test('test updating a user', async ()=> {
    const res = await request(app).patch(`/users/${testUser.id}`).send( {name: 'Mikeee Kushy', type: 'user'} )
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({
      user: {name: "Mikeee Kushy", type: 'user', id: testUser.id}
    })
  })
  test('attempts to update a user with invalid id', async ()=> {
    const res = await request(app).patch(`/users/0`).send( {name: 'Mikeee Kushy', type: 'user'} ) //sending data is not event necessary since it will 404
    expect(res.statusCode).toBe(404) 
  
  })
})



// describe("DELETE /users/:id", () => {
//   test("Deletes a single user", async () => {
//     const res = await request(app).delete(`/users/${testUser.id}`);
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toEqual({ msg: 'DELETED!' })
//   })
// })

//Test deleting a user
describe("DELETE /users/:id", () => {
  test('test deleting a user', async ()=> {
    const res = await request(app).delete(`/users/${testUser.id}`)
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({msg:"Delete successful."})
  })
})
