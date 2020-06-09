const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

const mongoose = require('mongoose')
const config = require('config')
const port = config.get('port')

const startServer = async () => {
  try {
    const server = new ApolloServer({ typeDefs, resolvers })
    await mongoose.connect(config.get('db'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log('✔️  Database connected!')

    server.listen({ port }).then(() => {
      console.log(`Apollo server is running on port: ${port}!`)
    })
  } catch (err) {
    console.log(`❌  Something went wrong: \n ${err}`)
  }
}

startServer()
