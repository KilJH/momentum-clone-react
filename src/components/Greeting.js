import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Zoom } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: '2.5em',
		color: 'white',
		textAlign: 'center',
		animation: 'fadeIn 1s ease 0s',
	},
}));

const Greeting = ({ name }) => {
	const classes = useStyles();

	return (
		<Zoom in timeout={1200}>
			<Typography
				className={classes.root}
				variant="h3"
				// className={`greeting ${SHOWING_CN}`}
			>{`Hi! ${name}`}</Typography>
		</Zoom>
	);
};

export default Greeting;
