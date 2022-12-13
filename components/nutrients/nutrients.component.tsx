type Props = {
	nutrients: string
}

export const Nutrients = ({ nutrients } : Props) => {

	const list = JSON.parse( nutrients );

	return (
		<div className={'nutrient-list'}>

		{	Object.entries( list ).map( ( [ title, value ], key ) => {

			return (
				<div className={'nutrient-item'} key={ key } style={{ display:'flex', gap:'0.5rem' }}>
					<h4 style={{ textTransform:'capitalize' }}> { title.replace('-', ' ') + ' :'} </h4>
					<h4> { value + ''  } </h4>
				</div>
			)
		})}

		</div>
	)
};