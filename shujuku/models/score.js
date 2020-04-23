const mongoose = require('mongoose')

// let personSchema = new mongoose.Schema({name: String, age: Number})
let scoreSchema = new mongoose.Schema({fenshu: Number})

// module.exports = mongoose.model('Person', personSchema)
module.exports = mongoose.model('Fenshu', scoreSchema)