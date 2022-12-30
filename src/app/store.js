import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/fetchTodoSlice";
import updateReducer from "../features/updateTodo";
import deleteReducer from "../features/deleteTodo";
import addReducer from "../features/addTodo";

export const store = configureStore({
	reducer: {
		todo: todoReducer,
		update: updateReducer,
		delete: deleteReducer,
		add: addReducer,
	},
});
