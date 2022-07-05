import { GotHouses } from './actions';
export const routes = [
	{
		path: 'houses',
		text: /.*/,
		action: GotHouses,
	},
];
