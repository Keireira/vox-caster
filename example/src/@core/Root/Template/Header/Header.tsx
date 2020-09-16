import React from 'react'
import { NavLink } from 'react-router-dom'

import StyledHeader, { Logo, Links, Link } from './Header.styles'

import ROUTES from '../../../routes'

const Header: React.FC<{}> = () => {
	return (
		<StyledHeader>
			<Logo>Vox-caster@0.0.1</Logo>

			<Links>
				<Link as={NavLink} to={ROUTES.ROOT}>Example</Link>
				|
				<Link as={NavLink} to={ROUTES.API}>API</Link>
				|
				<Link href="https://github.com/Keireira/vox-caster" target="_blank" rel="noopener noreferrer">
					Github
				</Link>
			</Links>
		</StyledHeader>
	)
}

export default Header
