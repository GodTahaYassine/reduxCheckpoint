import { ADD_TODO, TOGGLE_TODO, EDIT_TODO } from "../actionTypes";

const defaultState = {};

const todoMap = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_TODO: {
			const { id, content } = action.payload;
			return {
				...state,
				[id]: {
					content,
					completed: false,
				},
			};
		}
		case EDIT_TODO: {
			const { id, content } = action.payload;
			return { ...state, [id]: { ...state[id], content } }; // ...state => [id]
		}
		case TOGGLE_TODO: {
			const { id } = action.payload;
			const currentTodo = state[id];
			return {
				...state,
				[id]: { ...currentTodo, completed: !currentTodo.completed },
			};
		}
		default:
			return state;
	}
};

export default todoMap;
