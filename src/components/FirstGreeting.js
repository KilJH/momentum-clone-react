import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: '3em',
		color: 'white',
		marginTop: '40vh',
		textAlign: 'center',
		'& > *': {
			margin: theme.spacing(1),
			width: '20ch',
			color: 'white',
		},
		'& label.Mui-focused': {
			color: 'white',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'white',
		},
		'& .MuiInput-underline:before': {
			borderBottomColor: 'white',
		},
		'& .MuiInput-underline:hover:before': {
			borderBottomColor: 'white',
		},
		'& label': {
			color: 'white',
			fontSize: '2rem',
		},
		'& input': {
			fontSize: '3em',
			textAlign: 'center',
		},
		// 일반적인 라벨
		'& .MuiInputLabel-formControl': {
			transform: 'translate(6.5ch, 30px) scale(1.25)',
		},
		// 클릭했을 때 줄어드는 라벨
		'& .MuiInputLabel-shrink': {
			transform: 'translate(0, 1.5px) scale(0.5)',
		},
	},
	multilineColor: {
		color: 'white',
	},
}));

const FirstGreeting = ({ name, setName }) => {
	const classes = useStyles();

	const onNameHandler = (e) => {};

	const onSubmit = (e) => {
		e.preventDefault();
		setName(e.target.querySelector('input').value);
	};

	return (
		<div>
			<form
				className={classes.root}
				onSubmit={onSubmit}
				noValidate
				autoComplete="off"
			>
				<TextField
					id="standard-basic"
					label="What is your name?"
					onChange={onNameHandler}
					InputProps={{
						classes: {
							input: classes.multilineColor,
						},
					}}
				/>
			</form>
		</div>
	);
};

export default FirstGreeting;
