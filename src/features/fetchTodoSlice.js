import axios from "axios";
import { BASE_URL } from "../constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
	loading: false,
	error: "",
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
	return axios.get(`https://lutfullah-todo-55ce8-default-rtdb.firebaseio.com/todos.json`).then((res) => {
		const arr = [];
		for (let key in res.data) {
			arr.push({ ...res.data[key], id: key });
		}
		return arr;
	});
});

export const fetchTodoSlice = createSlice({
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
			state.todos = action.payload;
		});
		builder.addCase(fetchTodos.rejected, (state) => {
			state.loading = false;
			state.todos = [];
			state.error = "Yüklenemedi";
		});
	},
});

export default fetchTodoSlice.reducer;
