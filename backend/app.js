const express = require('express')
const mongoose = require('mongoose');
const app = express()

async function connectDb(){

await mongoose.connect('mongodb://127.0.0.1:27017/e-comm-store-db')
  .then(() => console.log('Connected!'));

}

connectDb().catch((err) => {
    console.log("error" , err)
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)