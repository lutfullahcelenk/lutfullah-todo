/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addTodo } from "../../features/addTodoSlice";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const AddTodo = () => {
	const dispatch = useDispatch();
	const [todo, setTodo] = useState("");

	const handleChange = (e) => setTodo(e.target.value);

	const handleAddTodo = () => {
		if (todo === "") {
			toast.info("Please add a todo...", { position: "bottom-right" });
		} else {
			dispatch(addTodo({ title: todo, completed: false }));
			setTodo("");
			toast.success(`Todo is added...`, { position: "bottom-right" });
		}
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
