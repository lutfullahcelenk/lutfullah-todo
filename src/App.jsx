import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { fetchTodos } from "./features/fetchTodoSlice";
import "./styles/main.css";

const App = () => {
	const dispatch = useDispatch();
	const { todos } = useSelector((state) => state.todo);
	console.log(todos);

	useEffect(() => {
		dispatch(fetchTodos());
	}, []);

	return (
		<div className='container'>
			<AddTodo />
			<TodoList todos={todos} />
		</div>
	);
};

export default App;
