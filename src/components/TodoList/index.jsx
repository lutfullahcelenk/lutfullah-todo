import React, { useState } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

const TodoList = ({ todos }) => {
	const [sort, setSort] = useState("all");

	return (
		<div className='container'>
			<div className='buttons'>
				<button className={`button ${sort === "all" && "selected"}`} onClick={() => setSort("all")}>
					All
				</button>
				<button className={`button ${sort === "active" && "selected"}`} onClick={() => setSort("active")}>
					Active
				</button>
				<button className={`button ${sort === "completed" && "selected"}`} onClick={() => setSort("completed")}>
					Completed
				</button>
			</div>

			<div className='todolist-container'>
				{todos.length === 0 ? (
					<div className='no-todo'>
						<h2 className='no-tasks'>Lets Add Some Todo :)</h2>
					</div>
				) : (
					<>
						{todos.length > 0 &&
							sort === "active" &&
							todos.map((todo) => {
								return todo.completed === false && <TodoItem todo={todo} />;
							})}
						{todos.length > 0 &&
							sort === "completed" &&
							todos.map((todo) => {
								return todo.completed === true && <TodoItem todo={todo} />;
							})}
						{todos.length > 0 &&
							sort === "all" &&
							todos.map((todo) => {
								return <TodoItem todo={todo} />;
							})}
					</>
				)}
			</div>
		</div>
	);
};

export default TodoList;
