import React from "react";
import CheckSVG from "../../assets/CheckSVG";
import TrashSVG from "../../assets/TrashSVG";
import "./style.css";

const TodoItem = ({ todo }) => {
	return (
		<div className='todo-item'>
			<div className="todo">
				<span className={`check-box ${todo.completed && "checked"}`} onClick={() => {}}>
					{todo.completed && <CheckSVG />}
				</span>
				<p className={`todo-text ${todo.completed && "checked"}`}>{todo.todo}</p>
			</div>

			<div className='delete' onClick={() => {}}>
				<TrashSVG />
			</div>
		</div>
	);
};

export default TodoItem;
