import React, { useState } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import { TODOS_LS } from '../Key';
import { Container, Grid } from '@material-ui/core';

const ToDoComponent = () => {
	console.log('ToDoComponent.js Rendering...');
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem(TODOS_LS)) || []
	);

	return (
		<Container maxWidth="lg">
			<Grid container justify="center" direction="row" alignItems="center">
				<Grid item xs={12}>
					<ToDoInput todos={todos} setTodos={setTodos} />
				</Grid>
				<Grid item xs={8} sm={6} md={4} lg={8}>
					<ToDoList todos={todos} setTodos={setTodos} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default ToDoComponent;
