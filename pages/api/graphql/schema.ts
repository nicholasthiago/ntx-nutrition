import { gql } from 'graphql-tag'

export const typeDefs = gql`

	type Item {
		id			: String!
		name		: String!
		tags		: [ String ]
		contains	: [ String ]
		nutrition	: String!
	}

	type Query {
		items: [ Item! ]
		item( name: String ): Item
	}
`;