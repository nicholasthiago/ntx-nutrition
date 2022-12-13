import queryGraphql from '../shared/query-graphql'

import { Nutrients } from '../components/nutrients/nutrients.component'


export default function UserProfile({ item }) {
	if (!item) {
		return <h1> {'User Not Found'} </h1>
	}

	return (
		<div key={ item.id }>

			<h1>
				{ item.name }
			</h1>

			<Nutrients nutrients={ item.nutrition } />

		</div>
	)
}


export async function getStaticProps( context ) {
	const { params } = context
	const { name } = params
	const { item = null } = await queryGraphql(`
		query( $name: String ) {
			item( name: $name ) {
				id
				name
				nutrition
			}
		}
  	`, { name }
	)
	return { props: { item } }
}


export async function getStaticPaths() {
	const { items } = (await queryGraphql(`
    	query {
      		items {
        		name
      		}
    	}
  	`)) as { items: { name: string }[] }

	return {
		paths: items.map(({ name }) => ({
			params: { name },
		})),
		fallback: true,
	}
}