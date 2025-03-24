const mongoose = require('mongoose')

const categorySchema= new mongoose.Schema({
    name : String,

})

const Categorys = mongoose.model("category" , categorySchema)

module.exports = Categorys;