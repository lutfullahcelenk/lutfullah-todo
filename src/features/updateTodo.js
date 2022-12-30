import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	error: "",
};

export const updateTodo = createAsyncThunk("todos/updateTodo", async (id) => {
	return fetch(`https://dummyjson.com/todos/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
            completed: false
        }),
	}).then((res) => res.json());
});

export const categoriesSlice = createSlice({
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

export default categoriesSlice.reducer;
