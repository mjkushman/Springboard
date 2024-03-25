const express = require("express")
const router = new express.Router();
const ExpressError = require("../expressError")
const items = require("../fakeDb")




// GET /items should return render a list of shopping items
router.get("/", (req,res) => {
    return res.json({items})
})



// POST /items should accept JSON data and add it to the shopping list
router.post("/", (req,res,next) => {
    try {
        if(!req.body.name) throw new ExpressError("Name must be included", 400);

        const newItem = { name: req.body.name, price: req.body.price}
        items.push(newItem)
        return res.status(201).json({added:newItem})
    } catch(e) {
        return next(e)
    }}
)


// GET /items/:name  should display a single item's name and price
router.get("/:name", (req,res) => {
    const foundItem = items.find(item => item.name == req.params.name)
    if(foundItem == undefined) {
        throw new ExpressError("No item found by that name",404)
    }
    console.log('params',req.params)
    console.log('body',req.body)
    return res.json(foundItem)
})


// PATCH /items/:name   should modify a single item's name and/or price
router.patch("/:name", (req,res)=> {
    const foundItem = items.find(item => item.name == req.params.name)
    if(foundItem == undefined) {
        throw new ExpressError("No item found by that name",404)
    }
    foundItem.name = req.body.name
    foundItem.price = req.body.price
    return res.json({updated:foundItem})
})



// DELETE /items/:name   should allow you to delete a specific item from the array. It will return {message: "Deleted"}
router.delete("/:name", (req,res) => {
    const foundItemIdx = items.findIndex(item => item.name == req.params.name)
    if(foundItemIdx === -1) {
        throw new ExpressError("No item found by that name",404)
    }
    items.splice(foundItemIdx,1)
    return res.json({message:'Deleted'})
})



module.exports = router;