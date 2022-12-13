import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { gql } from 'graphql-tag'

import { typeDefs  } from './graphql/schema'
import { resolvers } from './graphql/resolvers'


export const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
	schema,
})

export default startServerAndCreateNextHandler(server)
