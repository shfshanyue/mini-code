import http from 'node:http'
import getRawBody from 'raw-body'
import { graphql } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

class GraphQLServer {
  constructor ({ typeDefs, resolvers }) {
    this.schema = makeExecutableSchema({
      typeDefs,
      resolvers
    })
  }

  callback () {
    return async (req, res) => {
      const buffer = await getRawBody(req)
      const {
        query,
        operationName,
        variables
      } = JSON.parse(buffer.toString())
      const result = await graphql({
        schema: this.schema,
        source: query,
        variableValues: variables,
        operationName
      })
      res.end(JSON.stringify(result))
    }
  }

  listen (...args) {
    const server = http.createServer(this.callback())
    server.listen(...args)
  }
}

export default GraphQLServer
