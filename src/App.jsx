import React, { Component, Fragment } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './containers/TodoInput';

class App extends Component {
	state = {
		todoItems: []
	}
	addNewItem = (item) => {
		const { todoItems } = this.state;
		let lastId = todoItems.length;
		if (lastId) {
			const lastIndex = todoItems.length - 1;
			lastId = todoItems[lastIndex].id + 1;
		}
		const newItem = [...todoItems, {
			id: lastId,
			text: item,
		}];
		this.setState({ todoItems: newItem });
	}
	render() {
		return (
			<Fragment>
				<div align='center'>
					<h1>Todo App</h1>
					<TodoList todoItems={this.state.todoItems} />
					<TodoInput addNewItem={this.addNewItem} />
				</div>
			</Fragment>
		);
	}
}

export default App;