import Link from 'next/link'

import queryGraphql from '../shared/query-graphql'

export default function UserListing({ items }) {

	return (
		<div>
			<h1> {'User Listing'} </h1>
			<ul>
				{ items.map(( item ) => (
					<li key={ item.id }>
						<Link href={'/[name]'} as={`/${ item.name }`}>
							{ item.name }
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export async function getStaticProps() {
	const { items } = await queryGraphql(`
    	query {
      		items {
				id
        		name
      		}
    	}
  	`)
	return { props: { items } }
}
