const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  createdAt: String,
  updatedAt: String,
  status: String,
  deadline: String,
  categoryId: String,
})

module.exports = mongoose.model('Todo', todoSchema)
