import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Template from './Template'
import ApiPage from '../../@pages/ApiPage'
import ExamplePage from '../../@pages/ExamplePage'

import { ResetStyles, GeneralStyles } from '../styles'
import ROUTES from '../routes'

const Root: React.FC<{}> = () => (
	<>
		<ResetStyles/>
		<GeneralStyles/>

		<Router>
			<Template>
				<Switch>
					<Route exact path={ROUTES.ROOT} component={ExamplePage}/>
					<Route path={ROUTES.API} component={ApiPage}/>
				</Switch>
			</Template>
		</Router>
	</>
)

export default Root
