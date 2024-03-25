const db = require("../db");
const ExpressError = require("../expressError")



// Rewriting the Cat class
class Cat {
  static async getAll() {
    const result = await (db.query("SELECT id, name, age FROM cats"))
    return result.rows
  }

  static async getById(id) {
    
    const results = await db.query("SELECT id, name, age FROM cats WHERE id=$1", [id])
    if(results.rows.length === 0){
      throw new ExpressError("Cat not found",404)
    }
    return results.rows[0]
  }

  //create a new cat
  static async create(name, age) {
    if(!name || !age){
      throw new ExpressError("Missing required data",400)
    }

    const results = await db.query("INSERT INTO cats (name, age) VALUES ($1, $2) RETURNING id, name, age", [name, age])
    return results.rows[0]
  }

  //Delete a cat
  static async delete(id){
  const results = await db.query("DELETE FROM cats WHERE id=$1 RETURNING id", [id])
  
  if(results.rows.length === 0){
    throw new ExpressError(`Cat not found`,404)
  }}

  static async update(id, newName, newAge){
    
    const results = await db.query(`
    UPDATE cats SET name=$1, age=$2 
    WHERE id=$3
    RETURNING id, name, age
    `,[newName, newAge, id])

    if(results.rows.length === 0){
      throw new ExpressError(`Cat not found`,404)
    }
    return results.rows[0]
  }

  static async makeOlder(id){
    const results = await db.query(`
    UPDATE cats SET age = age + 1
    WHERE id = $1
    RETURNING id, name, age
    `, [id])

    if(results.rows.length === 0){
      throw new ExpressError(`Cat not found`,404)
    }
    return results.rows[0]
  }
}

module.exports = Cat;


// class Cat {
//   static async getAll() {
//     let result = await db.query("SELECT id, name, age FROM cats");
//     return result.rows;
//   }
//   static async getById(id) {
//     const result = await db.query(`SELECT id, name, age FROM cats WHERE  id = $1`, [id]);
//     if (result.rows.length === 0) {
//       throw new ExpressError("Cat not found", 404)
//     }
//     return result.rows[0];
//   }
//   static async create(name, age) {
//     if (!name || !age) {
//       throw new ExpressError("Missing required data", 400);
//     }
//     const result = await db.query(
//       `INSERT INTO cats (name, age) 
//       VALUES ($1, $2)
//       RETURNING id, name, age`,
//       [name, age]);
//     return result.rows[0];
//   }
//   static async delete(id) {
//     const result = await db.query(`
//       DELETE FROM cats
//       WHERE id = $1
//       RETURNING id`,
//       [id])
//     if (result.rows.length === 0) {
//       throw new ExpressError("Cat not found", 404)
//     }
//   }
//   static async update(id, newName, newAge) {
//     const result = await db.query(`
//       UPDATE cats SET name = $1, age  = $2 
//       WHERE id = $3
//       RETURNING id, name, age
//     `, [newName, newAge, id])
//     if (result.rows.length === 0) {
//       throw new ExpressError("Cat not found", 404)
//     }
//     return result.rows[0]
//   }

//   static async makeOlder(id) {
//     const result = await db.query(`
//       UPDATE cats SET age  = age + 1
//       WHERE id = $1
//       RETURNING id, name, age
//     `, [id])
//     if (result.rows.length === 0) {
//       throw new ExpressError("Cat not found", 404)
//     }
//     return result.rows[0]
//   }


// }
// module.exports = Cat;

