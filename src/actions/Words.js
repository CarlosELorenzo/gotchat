import React from 'react';
import { Text } from '@botonic/react';

export default class extends React.Component {
	static async botonicInit({ input, session }) {
		const words = input.payload.split('-')[1];
		return { words };
	}

	render() {
		const h = this.context.session;
		console.log(h);
		return (
			<>
				<Text>{this.props.words}</Text>
			</>
		);
	}
}
