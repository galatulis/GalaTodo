import React from 'react';
import { cleanup, render } from 'react-testing-library';

import TodoInput from './TodoInput';

afterEach(cleanup);

describe('TodoInput', () => {
  it('renders without crashing', () => {
    const submitNewItem = jest.fn();

    render(<TodoInput submitNewItem={submitNewItem} />);
  });
});
