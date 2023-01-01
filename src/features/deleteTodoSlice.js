import axios from "axios";
import { BASE_URL } from "../constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	error: "",
};

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
	return axios.delete(`${BASE_URL}/todos/${id}.json`)
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
