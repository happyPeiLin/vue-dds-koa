const mongoose = require('mongoose')

// let personSchema = new mongoose.Schema({name: String, age: Number})
let groupSchema = new mongoose.Schema({name: String, score: Number})

// module.exports = mongoose.model('Person', personSchema)
module.exports = mongoose.model('Group', groupSchema)