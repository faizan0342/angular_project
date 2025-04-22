const express = require('express')
const mongoose = require('mongoose');
const app = express()
const Categoryrouter = require("./router/category")
const cors = require("cors")



async function connectDb(){

await mongoose.connect('mongodb://127.0.0.1:27017/e-comm-store-db')
  .then(() => console.log('Connected!'));
}

//json date send kara gy tou , we use kar na hoga middlewere

app.use(cors())

app.use(express.json())

connectDb().catch((err) => {
    console.log("error" , err)
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use("/category" , Categoryrouter) 

app.listen(3000)