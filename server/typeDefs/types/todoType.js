const { gql } = require('apollo-server')

const todoType = gql`
  type Todo {
    id: ID
    title: String
    createdAt: String
    updatedAt: String
    status: String
    categoryId: String
    category: Category
  }
`

module.exports = {
  todoType,
}
