import styled from 'styled-components'

// Display
export const Row = styled.div`
	width: 100%;
	background: #cbd5e1;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	gap: 0.75rem;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
`;

export const Col = styled.div`
	background-color: #cbd5e1;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	gap: 0.75rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

// Typography
export const Title = styled.h2`
	color: #363636;
	font-size: 2rem;
	font-weight: 700;
`;

export const Body = styled.h4`
	color: #363636;
	font-size: 1rem;
	font-weight: 500;
`;

// Components
export const Button = styled.button`
	padding: 1rem 0.5rem;
	box-shadow: 0px 0px 4px #0f172a24;
	border-radius: 0.25rem;
`;

export const Input = styled.input`
	width: 90%;
	border: 1px solid #cbd5e1;
	padding: 0.5rem 1.25rem;
	font-size: 0.9rem;
	border-radius: 0.25rem;
`;

export const Badge = styled.span`
	width: 100%;
	color: #334155;
	background: #f8fafc;
	font-weight: 600;
	padding: 0.5rem 1.25rem;
	border-radius: 0.25rem;
	transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const List = styled( Col )`
	width: 32vw;
	align-items: flex-start;

	@media ( width < 768px ) {
		width: 80vw;
	}

	a {
		font-size: 0.9rem;
		color: #363636;
		text-decoration: none;
		
		width: 90%;
		color: #334155;
		background: #f8fafc;
		font-weight: 600;
		padding: 0.5rem 1.25rem;
		border-radius: 0.25rem;
		box-shadow: 2px 0px 4px #0f172a24;
		transition: 0.56s cubic-bezier(0.075, 0.82, 0.165, 1);

		&:hover {
			transform: translateY(-0.25rem);
			cursor: pointer;
		}
	}
`;