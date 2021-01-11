import { Fade, makeStyles, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
		marginTop: '10vh',
		'& h1': {
			fontSize: '10em',
			marginBottom: '32px',
		},
	},
}));

function getTime(is24) {
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = is24 ? date.getHours() : date.getHours() - 12; // 24시간 표기인지 확인 후 저장
	const seconds = date.getSeconds();

	return `${hours < 10 ? `0${hours}` : hours}:${
		minutes < 10 ? `0${minutes}` : minutes
	}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

const Clock = ({ is24 }) => {
	console.log('Clock.js rendering...');
	const [time, setTime] = useState(getTime(is24));

	const classes = useStyles();

	// useEffect 를 이용해 첫 렌더링에만 인터벌을 설정해서 중복호출을 방지
	useEffect(() => {
		setTime(getTime(is24));
		const callTime = setInterval(() => {
			setTime(getTime(is24));
		}, 1000);
		return () => {
			// 마운트 해제될 때 interval 해제
			clearInterval(callTime);
		};
	}, [is24]);

	// setInterval(() => {
	// 	setTime(getTime(is24));
	// }, 1000);
	// getTime();

	return (
		<Fade in timeout={1000}>
			<div className={classes.root}>
				<Typography variant="h1" gutterBottom>
					{time}
				</Typography>
			</div>
		</Fade>
	);
};

export default Clock;
