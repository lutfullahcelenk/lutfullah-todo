import React from "react";
import { useDispatch } from "react-redux";
import CheckSVG from "../../assets/CheckSVG";
import TrashSVG from "../../assets/TrashSVG";
import deleteTodo from "../../features/deleteTodo";
import updateTodo from "../../features/updateTodo";
import "./style.css";

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	const handleChangeStatus = (todo) => {
		dispatch(updateTodo(todo));
	};

	const handleDeleteTodo = (todo) => {
		dispatch(deleteTodo(todo));
	};

	return (
		<div className='todo-item'>
			<div className='todo'>
				<span className={`check-box ${todo?.completed && "checked"}`} onClick={() => handleChangeStatus(todo)}>
					{todo?.completed && <CheckSVG />}
				</span>
				<p className={`todo-text ${todo?.completed && "checked"}`}>{todo.todo}</p>
			</div>

			<div className='delete' onClick={() => handleDeleteTodo(todo)}>
				<TrashSVG />
			</div>
		</div>
	);
};

export default TodoItem;
