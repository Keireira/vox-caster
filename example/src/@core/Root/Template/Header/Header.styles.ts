import styled from 'styled-components'

export const Link = styled.a`
	color: var(--white);
	margin: 10px;
`

export const Links = styled.div`

`

export const Logo = styled.span`
	font-size: 24px;
	line-height: 28px;
	font-weight: 300;
	text-transform: uppercase;
`

export default styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;

	height: 64px;
	background-color: var(--violet);;
	color: var(--white);

	padding: 0 20px;
	box-sizing: border-box;

	display: flex;
	align-items: center;
	justify-content: space-between;
`
