const mongoose = require('mongoose')

const cartSchema= new mongoose.Schema({
    userId : { type: schema.Types.ObjectId, ref: "users" },

    productId : Array(String)
})

const Carts = mongoose.model("cart" , cartSchema)

module.exports = Carts;