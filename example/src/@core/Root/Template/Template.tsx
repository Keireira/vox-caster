import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

interface Props {
	children: React.ReactChild
}

const Template: React.FC<Props> = ({ children }: Props) => (
	<>
		<Header/>

		<Main>
			{children}
		</Main>

		<Footer/>
	</>
)

export default Template
