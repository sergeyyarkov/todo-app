const { gql } = require('apollo-server-express')

const query = gql`
  type Query {
    books: [Book]
  }
`

module.exports = {
  query,
}
