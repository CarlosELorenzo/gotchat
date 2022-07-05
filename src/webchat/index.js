import logo from '../assets/logo.png';
import wolf from '../assets/wolf.png';
import wolf2 from '../assets/wolf2.png';

export const webchat = {
	storage: sessionStorage,
	theme: {
		style: {
			position: 'fixed',
			right: 20,
			bottom: 20,
			width: 500,
			height: 800,
			margin: 'auto',
			backgroundColor: 'white',
			borderRadius: 25,
			boxShadow: '0 0 50px #aaaaaa',
			overflow: 'hidden',
			backgroundImage: 'linear-gradient(to top, #ffffff,#ffffff 11%,#cccccc 60%,#cccccc 85%)',
		},
		brand: {
			// color: 'blue',
			image: logo,
		},
		header: {
			title: 'Game Of Thrones Chat',
			image: wolf2,
			style: {
				borderBottom: '1px solid #bbbbbb',
				backgroundImage:
					'linear-gradient(90deg, #fcba03 0%, #fcba03 15%, #e3b535 52%, #aaaaaa 85%, #aaaaaa 85%)',
			},
		},
		triggerButton: {
			image: wolf,
		},
		intro: {
			image: logo,
		},
		message: {
			user: {
				style: {
					background: '#fcba03',
				},
			},
			bot: {
				image: wolf,
				style: {
					background: '#aaaaaa',
				},
			},
		},
	},
};
