const { gql } = require('apollo-server')

const todoType = gql`
  type Todo {
    id: ID
    title: String
    description: String
    createdAt: String
    updatedAt: String
    deadline: String
    categoryId: String
    category: Category
  }
`

module.exports = {
  todoType,
}
