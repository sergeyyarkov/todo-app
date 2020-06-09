const { todoResolvers } = require('./todoResolvers')
const { categoryResolvers } = require('./categoryResolvers')

const resolvers = [todoResolvers, categoryResolvers]

module.exports = {
  resolvers,
}
