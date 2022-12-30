import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	error: "",
};

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
	return fetch(`https://dummyjson.com/todos/${id}`, {
		method: "DELETE",
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
		builder.addCase(deleteTodo.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(deleteTodo.fulfilled, (state) => {
			state.loading = false;
			state.error = "";
		});
		builder.addCase(deleteTodo.rejected, (state) => {
			state.loading = false;
			state.error = "Güncellenemedi";
		});
	},
});

export default categoriesSlice.reducer;
