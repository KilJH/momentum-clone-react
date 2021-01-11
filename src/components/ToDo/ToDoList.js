import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, setTodos }) => {
	console.log('ToDoList.js Rendering...');
	return (
		<div className="toDoList">
			{todos.map((todo) => (
				<ToDoItem
					todo={todo}
					key={todo.id}
					todos={todos}
					setTodos={setTodos}
				></ToDoItem>
			))}
		</div>
	);
};

export default ToDoList;
