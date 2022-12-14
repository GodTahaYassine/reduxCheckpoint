import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content) => ({
	type: ADD_TODO,
	payload: {
		id: ++nextTodoId,
		content,
	},
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: { id },
});

export const editTodo = (id, content) => ({
    type: EDIT_TODO,
    payload: { id, content },
});

export const setFilter = (filter) => ({
	type: SET_FILTER,
	payload: { filter },
});
