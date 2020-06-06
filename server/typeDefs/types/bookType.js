const { gql } = require('apollo-server-express')

const bookType = gql`
  type Book {
    title: String
    author: String
  }
`

module.exports = {
  bookType,
}
