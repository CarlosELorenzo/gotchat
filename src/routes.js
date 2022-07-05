import { Words, RandomQuote, GotHouses } from './actions/';

export function routes({ session }) {
	if (session.is_first_interaction) {
		return [
			{
				path: 'houses',
				text: /.*/,
				action: GotHouses,
			},
		];
	} else
		return [
			{
				path: 'words',
				payload: /words-.*/,
				action: Words,
			},
			{
				path: 'randomQuote',
				text: /.*/,
				action: RandomQuote,
			},
		];
}
