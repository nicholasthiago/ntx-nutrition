import Link from 'next/link'
import queryGraphql from '../shared/query-graphql'

import { Nutrients } from '../components/nutrients/nutrients.component'
import { Button, Col, Row, Title } from '../components/styled'
import Menu from '../components/menu/menu.component'


export default function UserProfile({ item }) {
	if (!item) {
		return <h1> {'User Not Found'} </h1>
	}

	return (
		<Col key={ item.id } style={{ paddingBottom:'16rem' }}>

			<Link href={'/'}>
				<Button> {'Home'} </Button>
			</Link>

			<Title>
				{ item.name }
			</Title>

			<Nutrients nutrients={ item.nutrition } />
		</Col>
	)
}


export async function getStaticProps( context ) {
	const { params } = context
	const { name }	 = params
	const { item	 = null 	} = await queryGraphql(`
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