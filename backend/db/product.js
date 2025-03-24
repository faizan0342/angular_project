const mongoose = require('mongoose')

const productSchema= new mongoose.Schema({
    name : String,
    shortDescription:String,
    description:String,
    purchasePrice:Number,
    sellingPrice:Number,
    image:Array(String),
    categoryId: { type: schema.Types.ObjectId, ref: "category" },
  //is a Mongoose schema field definition that creates a reference (relationship) between two collections in MongoDB.

})

const Products = mongoose.model("product" , productSchema)

module.exports = Products;