const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    name : String,
    email:String,
    password : String,
    isAdmin: Boolean,
})

const Users = mongoose.model("users" , userSchema)

module.exports = Users;