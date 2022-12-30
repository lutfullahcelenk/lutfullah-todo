import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
	loading: false,
	error: "",
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
	return fetch("https://dummyjson.com/todos/user/5").then((res) => res.json());
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
			state.todos = action.payload.todos;
		});
		builder.addCase(fetchTodos.rejected, (state) => {
			state.loading = false;
			state.todos = [];
			state.error = "Yüklenemedi";
		});
	},
});

export default todoSlice.reducer;
