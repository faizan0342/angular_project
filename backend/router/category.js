
const express = require("express")

const router = express.Router()

const Categorys = require("../db/category")

const {AddtoCategory} = require("../handlers/category-handler")
const {updateCategory} = require("../handlers/category-handler")
const {deleteCategory} = require("../handlers/category-handler")
const {getCategory} = require("../handlers/category-handler")
const {getCategoryById} = require("../handlers/category-handler")

router.post("" , async (req,res) => {
    const category = req.body

    const result  = await AddtoCategory(category)

    // console.log("result ==> ",result)

    res.json(result);  


})

router.get("" , async (req,res) => {
    // const category = req.body

    const result  = await getCategory()


    res.send(result)

})

router.get("/:id" , async (req,res) => {
    // const category = req.body

    const id = req.params['id']

    console.log("id====>" , id)

    const result  = await getCategoryById(id)


    res.send(result)

})

router.put("/:id" , async(req,res) => {
    const category = req.body

    const id = req.params['id']

    updateCategory(category , id)

     res.json({message : "Ok"});  
})


router.delete("/:id" , async(req,res) => {

    const id = req.params['id']

    await deleteCategory(id)

     res.json({message : "deleteCategory"});  
})

module.exports = router