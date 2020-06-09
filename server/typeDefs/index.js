const { query } = require('./query')
const { mutation } = require('./mutation')

const { todoType } = require('./types/todoType')
const { categoryType } = require('./types/categoryType')

const typeDefs = [query, mutation, todoType, categoryType]

module.exports = {
  typeDefs,
}
