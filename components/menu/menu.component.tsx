import { Nav, Navbar } from 'react-bootstrap'

import Link from 'next/link'
import { Row } from '../styled';

import { MenuRef, menu_ref } from './menu.reference';


const menuConstructor = ( ref: MenuRef ) =>
	Object.values( ref ).map( ( option, i ) =>
		( !option.external )
		? (	<Link href={'/'} key={ i } >
				<Link href={ option.route }
					className={ `menu-item-${ option.title }` }
				> { option.title }
				</Link>
			</Link>
		) : (
			<Link key={i} className={ `menu-item-${ option.title }` }
				href={'/'}
			> { option.title } </Link>
		)
	);


const Menu = () => {
	return (
		<Navbar className={'page-menu tw-bg-white'}
			style={{ boxShadow:'4px 0 8px #DDD' }}
		>
			<Row>

				<Link href={'/'} className={'!tw-mr-8'}>
					<Navbar.Brand> {'Finance Tracker'} </Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls={"basic-navbar-nav"} />

				<Navbar.Collapse id={"basic-navbar-nav"}>
					<Nav className={"me-auto tw-bg-white"}>
						
						{ menuConstructor( menu_ref ) }

					</Nav>
				</Navbar.Collapse>

			</Row>
		</Navbar>
	);
};

export default ( Menu );