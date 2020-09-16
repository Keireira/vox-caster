import React from 'react'

import StyledMain from './Main.styles'

interface Props {
	children: React.ReactChild,
}

const Main: React.FC<Props> = ({ children }: Props) => {
	return (
		<StyledMain>{children}</StyledMain>
	)
}

export default Main
