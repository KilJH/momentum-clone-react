import React, { useState } from 'react';
import { Fade, IconButton, makeStyles, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
	root: {
		'& svg': {
			opacity: 0.8,
		},
	},
	input: {
		'& input': {
			color: 'white',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'white',
		},
		'& .MuiInput-underline:before': {
			opacity: 0,
		},
		'& .MuiInput-underline:hover:before': {
			opacity: 0,
		},
		transform: 'translate(0, 7px)',
	},
}));

const ToDoItem = (props) => {
	console.log('ToDoItem.js Rendering...');
	const [isEditable, setIsEditable] = useState(false);
	const [editedStr, setEditedStr] = useState(''); // 초기값 설정시 이전 아이템 삭제 시 정보 남음
	const classes = useStyles();
	const onDelete = (id) => {
		const deletedTodos = props.todos.filter((todo) => {
			return todo.id !== id;
		});

		deletedTodos.forEach((todo, i) => {
			todo.id = ++i;
		});

		props.setTodos(deletedTodos);
	};

	const onDbClick = (e, id) => {
		setEditedStr(props.todo.text);
		setIsEditable(true);
	};

	const showElement = (isEditable) => {
		if (isEditable) {
			return (
				<TextField
					autoFocus
					value={editedStr}
					className={classes.input}
					onChange={(e) => {
						setEditedStr(e.target.value);
					}}
					onBlur={(e) => {
						props.setTodos(
							props.todos.map((todo) => {
								return todo.id === props.todo.id
									? { ...todo, text: editedStr }
									: todo;
							})
						);
						setIsEditable(false);
					}}
				></TextField>
			);
		} else {
			return <span onDoubleClick={onDbClick}>{props.todo.text}</span>;
		}
	};

	return (
		<Fade in timeout={1000}>
			<div className={classes.root}>
				<IconButton
					aria-label="delete"
					color="secondary"
					onClick={() => {
						onDelete(props.todo.id);
					}}
				>
					<DeleteIcon />
				</IconButton>
				{/* <span onDoubleClick={onDbClick}>{props.todo.text}</span> */}
				{showElement(isEditable)}
			</div>
		</Fade>
	);
};

export default ToDoItem;
