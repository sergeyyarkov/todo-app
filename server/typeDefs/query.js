const { gql } = require('apollo-server')

const query = gql`
  type Query {
    todos: [Todo]
    todo(id: ID!): Todo
    categories: [Category]
    category(id: ID!): Category
  }
`

module.exports = {
  query,
}
