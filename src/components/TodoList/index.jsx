import React from "react";
import TodoItem from "../TodoItem";
import "./style.css";

const TodoList = ({ todos }) => {
	return (
		<div className='todolist-container'>
			{todos?.length > 0 ? (
				todos?.map((todo, index) => <TodoItem key={index} todo={todo} />)
			) : (
				<div className='no-todo'>
					<h2 className='no-tasks'>No Tasks Here</h2>
				</div>
			)}
		</div>
	);
};

export default TodoList;
