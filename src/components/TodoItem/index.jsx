/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import CheckSVG from "../../assets/CheckSVG";
import TrashSVG from "../../assets/TrashSVG";
import deleteTodo from "../../features/backend/deleteTodo";
import updateTodo from "../../features/backend/updateTodo";
import { toast, ToastContainer } from "react-toastify";
import { completeTodos, removeTodos } from "../../features/localStorage/todoSlice";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	// const handleChangeStatus = (todo) => dispatch(updateTodo(todo));
	// const handleDeleteTodo = (todo) => dispatch(deleteTodo(todo));

	const handleChangeStatus = (id) => dispatch(completeTodos(id));
	const handleDeleteTodo = (id) => {
		dispatch(removeTodos(id));
		toast.error("Todo is deleted", {position: "bottom-right"});
	};
	return (
		<div className='todo-item'>
			<div className='todo'>
				<span className={`check-box ${todo?.completed && "checked"}`} onClick={() => handleChangeStatus(todo.id)}>
					{todo?.completed && <CheckSVG />}
				</span>
				<p className={`todo-text ${todo?.completed && "checked"}`}>{todo.item}</p>
			</div>

			<div className='delete' onClick={() => handleDeleteTodo(todo.id)}>
				<TrashSVG />
			</div>
		</div>
	);
};

export default TodoItem;
