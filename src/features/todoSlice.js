import axios from "axios";
import { BASE_URL } from "../constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
	loading: false,
	error: "",
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
	return axios.get(`${BASE_URL}/todos.json`).then((res) => {
		const arr = [];
		for (let key in res.data) {
			arr.push({ ...res.data[key], id: key });
		}
		return arr;
	});
});

export const addTodo = createAsyncThunk("todos/addTodo", (todo) => {
	return axios.post(`${BASE_URL}/todos.json`, todo);
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
	const updatedTodo = {
		id: todo.id,
		title: todo.title,
		completed: !todo.completed,
	};
	return axios.patch(`${BASE_URL}/todos/${todo.id}.json`, updatedTodo);
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
	return axios.delete(`${BASE_URL}/todos/${id}.json`);
});

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTodos.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
			state.loading = false;
			state.error = "";
			state.todos = action.payload;
		});
		builder.addCase(fetchTodos.rejected, (state) => {
			state.loading = false;
			state.todos = [];
			state.error = "Yüklenemedi";
		});
	},
});

export default todoSlice.reducer;
