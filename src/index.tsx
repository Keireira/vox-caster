import React from 'react'

interface Props {
  text: string
}

const ExampleComponent: React.FC<Props> = ({ text }: Props) => {
	return (
		<div>Example: {text}</div>
	)
}

export default ExampleComponent
