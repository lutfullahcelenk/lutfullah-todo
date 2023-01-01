import axios from "axios";
import { BASE_URL } from "../constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	error: "",
};

export const addTodo = createAsyncThunk("todos/addTodo", (todo) => {
	return axios.post(`https://lutfullah-todo-55ce8-default-rtdb.firebaseio.com/todos.json`, todo);
});

export const addTodoSlice = createSlice({
	name: "devices",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(addTodo.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(addTodo.fulfilled, (state) => {
			state.loading = false;
			state.error = "";
		});
		builder.addCase(addTodo.rejected, (state) => {
			state.loading = false;
			state.error = "Yüklenemedi";
		});
	},
});

export default addTodoSlice.reducer;
