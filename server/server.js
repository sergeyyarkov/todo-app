const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

const PORT = 3001

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers })

  server.listen(PORT, () => {
    console.log(`Apollo server is running on port: ${PORT}`)
  })
}

startServer()
