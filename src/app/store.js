import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/backend/fetchTodoSlice";
import updateReducer from "../features/backend/updateTodo";
import deleteReducer from "../features/backend/deleteTodo";
import addReducer from "../features/backend/addTodo";
import todoSliceReducer from "../features/localStorage/todoSlice";

export const store = configureStore({
	reducer: {
		todo: todoReducer,
		update: updateReducer,
		delete: deleteReducer,
		add: addReducer,
		todoSlice: todoSliceReducer,
	},
});
