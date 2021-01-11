import { TextField, Fade } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { TODOS_LS } from '../Key';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: '2rem',
		color: 'white',
		textAlign: 'center',
		'& > *': {
			margin: theme.spacing(1),
			width: '20ch',
			// color: 'white',
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
			color: 'rgba(255, 255, 255, 0.6)',
			fontSize: '2rem',
		},
		'& input': {
			fontSize: '1.5rem',
			textAlign: 'center',
		},
		// 일반적인 라벨
		'& .MuiInputLabel-formControl': {
			transform: 'translate(2ch, 16px) scale(1)',
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

const ToDoInput = ({ todos, setTodos }) => {
	console.log('ToDoInput.js Rendering...');
	const classes = useStyles();

	const [todoObj, setTodoObj] = useState({ id: '', text: '' });

	const onInputHandler = (e) => {
		setTodoObj({ id: todos.length + 1, text: e.target.value });
	};

	useEffect(() => {
		localStorage.setItem(TODOS_LS, JSON.stringify(todos));
	}, [todos]);

	const onSubmit = (e) => {
		e.preventDefault();
		if (todoObj.text !== '') {
			setTodos([...todos, todoObj]);
			setTodoObj({ text: '' });
			// e.nativeEvent.target.querySelector('input').value = '';
			e.target.reset();
		}
	};

	return (
		<Fade in timeout={1000}>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				onSubmit={onSubmit}
			>
				<TextField
					id="standard-basic"
					label="What is yours to do?"
					onChange={onInputHandler}
					inputProps={{
						style: {
							width: '100%',
						},
					}}
					InputProps={{
						classes: {
							input: classes.multilineColor,
						},
					}}
				></TextField>
			</form>
		</Fade>
	);
};

export default ToDoInput;
