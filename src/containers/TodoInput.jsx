import React, { Component, Fragment } from 'react';

class TodoInput extends Component {
	state = {
		newItem: ''
	}
	handleChange = (event) => {
		this.setState({ newItem: event.target.value })
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const { newItem } = this.state;
		if (!newItem.length) return;
		this.props.addNewItem(newItem);
		this.setState({ newItem: '' });
	}
	render() {
		return (
			<Fragment>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} value={this.state.newItem} type='text' />
					<button>Add</button>
				</form>
			</Fragment>
		);
	}
}

export default TodoInput;