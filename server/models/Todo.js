const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  title: String,
  createdAt: String,
  updatedAt: String,
  status: String,
  categoryId: String,
})

module.exports = mongoose.model('Todo', todoSchema)
