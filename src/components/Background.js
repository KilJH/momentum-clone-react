import { Fade, makeStyles } from '@material-ui/core';
import React from 'react';

const IMG_NUMBER = 7;

const useStyles = makeStyles(() => ({
	root: {
		background: `url(/img/${genRandom()}.jpg)`,
		position: 'fixed',
		top: '0',
		left: 0,
		zIndex: -1,
		animation: 'fadeIn 1s ease 0s',
		objectFit: 'cover',
		backgroundSize: 'cover',
		width: '100%',
		height: '100%',
	},
}));

function genRandom() {
	const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
	return number;
}

const Background = () => {
	console.log('Background.js Rendering...');
	const classes = useStyles();

	// classes.root.background = `url(/img/${genRandom()}.jpg)`;

	return (
		<Fade in timeout={1000}>
			<div
				// src={`/img/${genRandom()}.jpg`}
				// alt="background"
				// loading="lazy"
				className={classes.root}
			></div>
		</Fade>
	);
};

export default Background;
