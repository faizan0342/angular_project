const mongoose = require('mongoose')

const wishlistSchema= new mongoose.Schema({
    userId : { type: schema.Types.ObjectId, ref: "users" },

    productId : Array(String)
})

const WishList = mongoose.model("users" , wishlistSchema)

module.exports = WishList;