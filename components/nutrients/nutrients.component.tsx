import { Body, Col, Row } from "../styled";

type Props = {
	nutrients: string
}

export const Nutrients = ({ nutrients } : Props) => {

	const list = JSON.parse( nutrients );

	return (
		<Col className={'nutrient-list'}>

		{	Object.entries( list ).map( ( [ title, value ], key ) => {

			return (
				<Row className={'nutrient-item'} key={ key } style={{ height:'2rem', justifyContent:'space-between' }}>
					<Body style={{ textTransform:'capitalize' }}> { title.replace('-', ' ') + ' :'} </Body>
					<Body> { value + ''  } </Body>
				</Row>
			)
		})}

		</Col>
	)
};