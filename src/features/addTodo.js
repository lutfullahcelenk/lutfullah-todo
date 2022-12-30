import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	error: "",
};

export const addTodo = createAsyncThunk("todos/addTodo", async (values) => {
	return fetch("https://dummyjson.com/todos/add", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			todo: values.todo,
			completed: values.completed,
			userId: 5,
		}),
	}).then((res) => res.json());
});

export const categoriesSlice = createSlice({
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

export default categoriesSlice.reducer;
