const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/user-router')
const url = 'mongodb+srv://hemang:hemang@cluster0.nldzu.mongodb.net/mydb?retryWrites=true&w=majority'
const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const userrouter = require('./routes/user-router')
app.use('/users', userrouter)

app.listen(3000, () => {
    console.log('Server started')
})