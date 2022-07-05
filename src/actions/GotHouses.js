import { Button, Carousel, Element, Pic, RequestContext, Subtitle, Text, Title } from '@botonic/react';
import fetch from 'isomorphic-fetch';
import React from 'react';

export default class extends React.Component {
	static contextType = RequestContext;
	static async botonicInit({ input, session, params, lastRoutePath }) {
		let houses = [];
		let allHousesFetched = false;
		let page = 1;
		const baseUrl = 'https://www.anapioficeandfire.com/api/houses?pageSize=50&hasWords=true';

		while (!allHousesFetched) {
			const url = baseUrl + `&page=${page}`;
			const res = await fetch(url, {
				url: url,
				method: 'GET',
				params: {},
			});

			const newHouses = await res.json();

			if (newHouses.length > 0) {
				houses = houses.concat(newHouses);
				page++;
			} else allHousesFetched = true;
		}

		session.resp = houses;
	}

	render() {
		return (
			<>
				<Text>Houses:</Text>
				<Carousel>
					{this.context.session.resp.map((e, i) => (
						<Element key={e.name}>
							<Title>{e.name}</Title>
							<Button payload={`words-${e.words}`}>{`Say the words of ${e.name}.`}</Button>
						</Element>
					))}
				</Carousel>
			</>
		);
	}
}
