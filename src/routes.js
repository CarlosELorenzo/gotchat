import { GotHouses, Words } from './actions';

export const routes = [
	{
		path: 'words',
		payload: /words-.*/,
		action: Words,
	},
	{
		path: 'houses',
		text: /.*/,
		action: GotHouses,
	},
];
