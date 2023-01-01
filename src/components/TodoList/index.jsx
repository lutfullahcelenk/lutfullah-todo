import React, { useState } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

const TodoList = ({ todos, loading }) => {
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
							todos.map((todo, index) => {
								return todo.completed === false && <TodoItem key={index} todo={todo} />;
							})}
						{todos.length > 0 &&
							sort === "completed" &&
							todos.map((todo, index) => {
								return todo.completed === true && <TodoItem key={index} todo={todo} />;
							})}
						{todos.length > 0 &&
							sort === "all" &&
							todos.map((todo, index) => {
								return <TodoItem key={index} todo={todo} />;
							})}
					</>
				)}
			</div>
		</div>
	);
};

export default TodoList;
