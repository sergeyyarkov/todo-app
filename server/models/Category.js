const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  title: String,
  createdAt: String,
  updatedAt: String,
})

module.exports = mongoose.model('Category', categorySchema)
