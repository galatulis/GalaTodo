import { TYPES } from './actions';

const initialStates = {
	todoItems: [],
	newItem: ''
};

export const reducers = (state = initialStates, action) => {
	switch (action.type) {
	case TYPES.ADD_ITEM:
		return Object.assign({}, state, { todoItems: [...state.todoItems, action.payload] });
	case TYPES.INPUT_NEW_ITEM:
		return Object.assign({}, state, { newItem: action.payload });
	default:
		return state;
	}
};
