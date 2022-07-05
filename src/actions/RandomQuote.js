import { RequestContext, Text } from '@botonic/react';
import fetch from 'isomorphic-fetch';
import React from 'react';

export default class extends React.Component {
	static contextType = RequestContext;
	static async botonicInit({ session }) {
		const url = 'https://api.quotable.io/random';
		const res = await fetch(url, {
			url: url,
			method: 'GET',
			params: {},
		});

		session.resp = await res.json();
	}

	render() {
		const { content, author } = this.context.session.resp;
		return (
			<>
				<Text>{content}</Text>
				<Text> {author}</Text>
			</>
		);
	}
}
