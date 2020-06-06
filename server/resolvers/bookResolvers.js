const { Book } = require('../models')

const bookResolvers = {
  Query: {
    books: () => Book.all(),
  },
}

module.exports = {
  bookResolvers,
}
