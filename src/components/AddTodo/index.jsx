/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addTodo from "../../features/backend/addTodo";
import { addTodos } from "../../features/localStorage/todoSlice";
import "./style.css";

const AddTodo = () => {
	const [todo, setTodo] = useState("");
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	// const handleAddTodo = () => {
	// 	if (todo === "") {
	// 		alert("Please enter a todo");
	// 	}
	// 	dispatch(addTodo(todo, false, 5));
	// };

	const handleAddTodo = () => {
		if (todo === "") {
			alert("Please enter a todo");
		} else {
			dispatch(
				addTodos({
					id: Math.floor(Math.random() * 1000),
					item: todo,
					completed: false,
				})
			);
		}
		setTodo("");
	};

	return (
		<div className='header'>
			<h1 className='todo-text'>Lutfullah Todo</h1>

			<div className='add-todo'>
				<input placeholder='Add a new Lutfullah todo...' onChange={(e) => handleChange(e)} value={todo} />
				<button type='button' className='add-button' onClick={handleAddTodo}>
					Add
				</button>
			</div>
		</div>
	);
};

export default AddTodo;
