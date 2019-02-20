import React from 'react';
import { cleanup, render } from 'react-testing-library';

import TodoList from './TodoList';

afterEach(cleanup);

describe('TodoList', () => {
	it('renders without crashing', () => {
		const deleteItem = jest.fn();

		render(<TodoList todoItems={[]} deleteItem={deleteItem} />);
	});
});
