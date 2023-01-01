import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import Background from "./components/BackGround";
import TodoList from "./components/TodoList";
import { fetchTodos } from "./features/fetchTodoSlice";
import "./styles/main.css";

const App = () => {
	const dispatch = useDispatch();
	const { todos, loading } = useSelector((state) => state.todo);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [todos, dispatch]);


	return (
		<div className='container'>
            <Background />
			<AddTodo />
			<TodoList todos={todos} loading={loading} />
		</div>
	);
};

export default App;
