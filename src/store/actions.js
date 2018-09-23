export const TYPES = {
	ADD_ITEM: 'ADD_ITEM',
	INPUT_NEW_ITEM: 'INPUT_NEW_ITEM'
};

export const actions = {
	addItem: (payload) => ({ type: TYPES.ADD_ITEM, payload }),
	inputNewItem: (payload) => ({ type: TYPES.INPUT_NEW_ITEM, payload })
};
