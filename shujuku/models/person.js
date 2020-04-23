const mongoose = require('mongoose')

let personSchema = new mongoose.Schema({name: String, age: Number, type: String, time: String})

module.exports = mongoose.model('Person', personSchema)
