/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addTodo from "../../features/backend/addTodo";
import { toast, ToastContainer } from "react-toastify";
import { addTodos } from "../../features/localStorage/todoSlice";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const AddTodo = () => {
	const [todo, setTodo] = useState("");
	const dispatch = useDispatch();

	const handleChange = (e) => setTodo(e.target.value);
	const handleAddTodo = () => {
		todo === ""
			? alert("Please enter a todo")
			: dispatch(
					addTodos({
						id: Math.floor(Math.random() * 1000),
						item: todo,
						completed: false,
					})
			  );
		setTodo("");
		toast.success("Todo is added successfully...", { position: "bottom-right" });
	};

	return (
		<div className='header'>
			<h1 className='todo-text'>Lutfullah Todo</h1>

			<div className='add-todo'>
				<input placeholder='Add a new Lutfullah todo...' onChange={(e) => handleChange(e)} value={todo} />
				<button type='button' className='add-button' onClick={handleAddTodo}>
					Add
				</button>
				<ToastContainer autoClose={false} draggable={false} />
			</div>
		</div>
	);
};

export default AddTodo;
