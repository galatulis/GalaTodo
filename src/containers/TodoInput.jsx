import React, { Component, Fragment } from 'react';

const style = {
	form: {
		width: '90%'
	},
	input: {
		background: 'transparent',
		border: '0px solid #20232a',
		borderBottom: '1px solid #61dafb',
		color: '#61dafb',
		fontSize: '1.25em',
		padding: '0.25em 1em',
		textAlign: 'center',
		width: '40%'
	},
	button: {
		background: '#61dafb',
		border: '3px solid #61dafb',
		borderRadius: '5px',
		color: '#000000',
		fontSize: '1.25em',
		margin: '0 0.2em',
		padding: '0.25em 1em'
	}
};

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
				<form onSubmit={this.handleSubmit} style={style.form}>
					<input onChange={this.handleChange} value={this.state.newItem} type='text' style={style.input} />
					<button style={style.button}>Add</button>
				</form>
			</Fragment>
		);
	}
}

export default TodoInput;