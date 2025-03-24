const mongoose = require('mongoose')

const orderSchema= new mongoose.Schema({
    date : Date,
    items : Array(any),
    status : Number

})

const Orders = mongoose.model("order" , orderSchema)

module.exports = Orders;