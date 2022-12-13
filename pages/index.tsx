import Link from 'next/link'
import queryGraphql from '../shared/query-graphql'

import { Badge, Col, Input, List, Title } from '../components/styled'
import Menu from '../components/menu/menu.component'
import { useState } from 'react'


export default function UserListing({ items }) {

	const [ list, setList ] = useState( items );

	const listFilter = ( value: string ) => {
		let newList = items.filter( item => ( item.name ).toLowerCase().includes( value.toLowerCase() ) )

		return setList( newList );
	};

	return (
		<Col className={'nutrition-app'} style={{ paddingBottom:'16vh' }}>

			<Title> {'User Listing'} </Title>

			<List>
				<Input placeholder={'Search'}
					onInput={ e => listFilter( e.target.value ) }
				/>

				{ list.map(( item : any ) => (
					<Link href={'/[name]'} as={`/${ item.name }`} key={ item.id }>
						{ item.name }
					</Link>
				))}

			</List>
		</Col>
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
