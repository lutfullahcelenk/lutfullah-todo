/* eslint-disable no-unused-vars */
import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import CheckSVG from "../../assets/CheckSVG";
import TrashSVG from "../../assets/TrashSVG";
import { deleteTodo } from "../../features/deleteTodoSlice";
import { updateTodo } from "../../features/updateTodoSlice";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	const handleChangeStatus = (todo) => dispatch(updateTodo(todo));
	const handleDeleteTodo = (todo) => {
		dispatch(deleteTodo(todo.id));
		toast.warning(`Todo:${todo.title} is deleted`, { position: "bottom-right", autoClose: 1500 });
	};

	return (
		<div className='todo-item'>
			<div className='todo'>
				<span className={`check-box ${todo?.completed && "checked"}`} onClick={() => handleChangeStatus(todo)}>
					{todo?.completed && <CheckSVG />}
				</span>
				<p className={`todo-text ${todo?.completed && "checked"}`}>{todo.title}</p>
			</div>

			<div className='delete' onClick={() => handleDeleteTodo(todo)}>
				<TrashSVG />
			</div>
		</div>
	);
};

export default TodoItem;
