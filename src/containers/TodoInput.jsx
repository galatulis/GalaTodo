import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { actions } from '../store';

const styles = {
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
	handleChange = (event) => {
		this.props.dispatch(actions.inputNewItem(event.target.value));
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const { newItem, dispatch } = this.props;
		if (!newItem.length) return;
		this.addNewItem(newItem);
		dispatch(actions.inputNewItem(''));
	}
	addNewItem = (item) => {
		const { todoItems, dispatch } = this.props;
		let lastId = todoItems.length;
		if (lastId) {
			const lastIndex = todoItems.length - 1;
			lastId = todoItems[lastIndex].id + 1;
		}
		const newItem = {
			id: lastId,
			text: item,
		};
		dispatch(actions.addItem(newItem));
	}
	render() {
		const { classes, newItem } = this.props;
		return (
			<Fragment>
				<form onSubmit={this.handleSubmit} className={classes.form}>
					<input onChange={this.handleChange} value={newItem} type='text' className={classes.input} />
					<button className={classes.button}>Add</button>
				</form>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	newItem: state.newItem,
	todoItems: state.todoItems
});

TodoInput.propTypes = {
	classes: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
	newItem: PropTypes.string.isRequired,
	todoItems: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(injectSheet(styles)(TodoInput));
