import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/fetchTodoSlice";

export const store = configureStore({
	reducer: {
		todo: TodoReducer,
	},
});
