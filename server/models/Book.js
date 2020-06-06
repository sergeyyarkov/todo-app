const { books } = require('../data/index')

class Book {
  static all() {
    return books
  }
}

module.exports = {
  Book,
}
