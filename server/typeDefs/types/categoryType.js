const { gql } = require('apollo-server')

const categoryType = gql`
  type Category {
    id: ID
    title: String
    description: String
    createdAt: String
    updatedAt: String
    todos: [Todo]
  }
`

module.exports = {
  categoryType,
}
