import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	error: "",
};

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
	return axios.delete(`${process.env.REACT_APP_API_END_POINT}/todos/${id}.json`)
});

export const deleteTodoSlice = createSlice({
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

export default deleteTodoSlice.reducer;
