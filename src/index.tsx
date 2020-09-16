import React from 'react'

interface Props {
  text: string
}

const ExampleComponent: React.FC<Props> = ({ text }: Props) => {
	return (
		<div>
			<div>
				<div>Chat Message {text}</div>
				<div>Chat Message {text}</div>
				<div>Chat Message {text}</div>
				<div>Chat Message {text}</div>
			</div>

			<div>Chat TextInput</div>
		</div>
	)
}

export default ExampleComponent
