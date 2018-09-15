import React, { Component, Fragment } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './containers/TodoInput';

const style = {
	content: {
		alignItems: 'center',
		display: 'flex',
		backgroundColor: '#20232a',
		bottom: '0',
		justifyContent: 'top',
		flexDirection: 'column',
		fontFamily: 'Ubuntu, Roboto,sans-serif',
		left: '0',
		margin: 'auto',
		maxHeight: '100%',
		maxWidth: '100%',
		overflow: 'auto',
		position: 'absolute',
		right: '0',
		textAlign: 'center',
		top: '0',
	},
	title: {
		color: '#61dafb',
		fontSize: '2em',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '10%',
		textAlign: 'center'
	},
};

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
	componentDidMount() {
		document.title = "Todo App"
	}
	render() {
		return (
			<Fragment>
				<div style={style.content}>
					<h1 style={style.title}>Todo App</h1>
					<TodoList todoItems={this.state.todoItems} />
					<TodoInput addNewItem={this.addNewItem} />
				</div>
			</Fragment>
		);
	}
}

export default App;