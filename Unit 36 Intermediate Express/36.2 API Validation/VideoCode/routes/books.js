const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
// const jsonschema = require("jsonschema");
// const bookSchema = require("../schemas/bookSchema.json")
const jsonschema = require('jsonschema')
const bookschema = require('../schemas/bookSchema.json')

// VERSION WITHOUT ANY REAL VALIDATION...
// router.post("/", function (req, res, next) {
//   const bookData = req.body.book;

//   if (!bookData) {
//     // pass a 400 error to the error-handler
//     let error = new ExpressError("Book data is required", 400);
//     return next(error);
//   }

//   // (not implemented) insert book into database here

//   return res.json(bookData);
// });


// THE OLD NEW ROUTE

// router.post("/", function (req, res, next) {
//   // Validate req.body against our book schema:
//   const result = jsonschema.validate(req.body, bookSchema);

//   // If it's not valid...
//   if (!result.valid) {
//     //Collect all the errors in an array
//     const listOfErrors = result.errors.map(e => e.stack);
//     const err = new ExpressError(listOfErrors, 400);
//     //Call next with error
//     return next(err);
//   }
//   // This is where you would insert something into your DB
//   // If we make it here, we know the data is validated!
//   return res.json("THAT IS VALID!");
// });

// THE NEW NEW ROUTE

router.post("/", (req,res,next) => {
  const result = jsonschema.validate(req.body, bookschema)

  if(!result.valid){
    // log for convenience
    console.log(result)
    // Map all error stacks to an array
    const listOfErrors = result.errors.map(e => e.stack);
    // PAss the list of errors to ExpressError
    const err = new ExpressError(listOfErrors,400)
    // return the errors
    return next(err)
  }
  return res.json("That is valid!")
})




module.exports = router;
