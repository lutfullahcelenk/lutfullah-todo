import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	error: "",
};

export const addTodo = createAsyncThunk("todos/addTodo", (todo) => {
	return axios.post(`${process.env.REACT_APP_API_END_POINT}/todos.json`, todo);
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
