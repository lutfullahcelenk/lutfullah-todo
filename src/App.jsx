/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { fetchTodos } from "./features/backend/fetchTodoSlice";
import "./styles/main.css";

const App = () => {
	// const dispatch = useDispatch();
	// const { todos } = useSelector((state) => state.todo);
	// useEffect(() => {
	// 	dispatch(fetchTodos());
	// }, []);

	const { todos } = useSelector((state) => state?.todoSlice);

	return (
		<div className='container'>
			<AddTodo />
			<TodoList todos={todos} />
		</div>
	);
};

export default App;
