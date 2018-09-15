import React, { Component, Fragment } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './containers/TodoInput';

class App extends Component {
	render() {
		return (
			<Fragment>
				<div align='center'>
					<h1>Todo App</h1>
					<TodoList />
					<TodoInput />
				</div>
			</Fragment>
		);
	}
}

export default App;