import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
};

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodos: (state, action) => {
			state.todos.push(action.payload);
			return state;
		},

		removeTodos: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			return state;
		},

		completeTodos: (state, action) => {
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			});
		},
	},
});

export const { addTodos, removeTodos, updateTodos, completeTodos } = todoSlice.actions;

export default todoSlice.reducer;
