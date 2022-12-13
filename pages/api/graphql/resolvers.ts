import { items as data } from './data';

let items = data.map( ({ id, name, tags, contains, nutrition }) => {
	return {
		id, name, tags, contains, nutrition: JSON.stringify(nutrition)
	}
})

export const resolvers = {
	Query: {
		items () { return items },
		
		item( parent, { name }) {
			return items.find( item => item.name === name )
		},
	}
}