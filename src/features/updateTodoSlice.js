import axios from "axios";
import { BASE_URL } from "../constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	error: "",
};

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
	const updatedTodo = {
		id: todo.id,
		title: todo.title,
		completed: !todo.completed,
	};
	return axios.patch(`https://lutfullah-todo-55ce8-default-rtdb.firebaseio.com/todos/${todo.id}.json`, updatedTodo);
});

export const updateTodoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(updateTodo.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(updateTodo.fulfilled, (state) => {
			state.loading = false;
			state.error = "";
		});
		builder.addCase(updateTodo.rejected, (state) => {
			state.loading = false;
			state.error = "Güncellenemedi";
		});
	},
});

export default updateTodoSlice.reducer;
