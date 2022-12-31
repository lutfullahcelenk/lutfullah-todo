import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/fetchTodoSlice";
import updateReducer from "../features/updateTodoSlice";
import deleteReducer from "../features/deleteTodoSlice";
import addReducer from "../features/addTodoSlice";
import todoSliceReducer from "../features/frontend/todoSlice";

export const store = configureStore({
	reducer: {
		todo: todoReducer,
		update: updateReducer,
		delete: deleteReducer,
		add: addReducer,
		todoSlice: todoSliceReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
