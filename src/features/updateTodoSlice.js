import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
	return axios.patch(`${process.env.REACT_APP_API_END_POINT}/todos/${todo.id}.json`, updatedTodo);
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
