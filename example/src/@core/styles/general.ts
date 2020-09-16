import { createGlobalStyle } from 'styled-components'

const General = createGlobalStyle`
	:root {
		--grid-unit: calc(100vw / 40);

		--white: rgba(255, 255, 255, 1.0);
		--violet: rgba(87, 95, 207, 1.0);
	}

	html {
		height: 100%;
		font-weight: 300;
		background-color: var(--violet);
	}

	body {
		background-color: var(--white);
		min-height: 100%;
	}

	#root {
		display: flex;
		margin: 0 auto;
		flex-direction: column;
		align-items: center;

		min-height: 100vh;
	}
`

export default General
