import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addTodo from "../../features/addTodo";
import "./style.css";

const AddTodo = () => {
	const dispatch = useDispatch();
	const [todoText, setTodoText] = useState("");

	const handleAddTodo = () => {
		if (todoText === "") {
			alert("hoppp");
		}
		dispatch(addTodo(todoText, false, 5));
	};

	return (
		<div className='header'>
			<h1 className='todo-text'>Lutfullah Todo</h1>

			<div className='add-todo'>
				<input placeholder='Add a new Lutfullah todo...' onChange={(e) => setTodoText(e.target.value)} />
				<button type='button' className='add-button' onClick={handleAddTodo}>
					Add
				</button>
			</div>
		</div>
	);
};

export default AddTodo;
