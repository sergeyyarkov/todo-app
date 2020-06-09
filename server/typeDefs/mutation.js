const { gql } = require('apollo-server')

const mutation = gql`
  type Mutation {
    # Todo mutations
    createTodo(title: String!, categoryId: String!): Todo
    deleteTodo(id: ID!): Todo
    updateTodo(id: ID! title: String! status: String! categoryId: String!): Todo

    # Category mutations
    createCategory(title: String!, description: String!): Category
    deleteCategory(id: ID!): Category
    updateCategory(id: ID! title: String! description: String!): Category
  }
`

module.exports = {
  mutation
}