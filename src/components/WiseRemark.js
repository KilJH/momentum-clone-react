import { Fade, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles({
	root: {
		width: '100%',
		textAlign: 'center',
		'& > p': {
			animation: 'fadeIn 1s ease 0s',
		},
	},
});

const WiseRemark = () => {
	const classes = useStyles();
	const [advice, setAdvice] = useState('');

	fetch('https://api.adviceslip.com/advice')
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			setAdvice(json.slip.advice);
		});

	return (
		// advice 만 쓰면 콘솔에 boolean 아니라고 계속 warning 나와서 저렇게 수정...
		<Fade in={!!advice} timeout={1200}>
			<div className={classes.root}>
				<Typography variant="body1" gutterBottom>
					{advice}
				</Typography>
			</div>
		</Fade>
	);
};

export default WiseRemark;
