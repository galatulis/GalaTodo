import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

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
	state = {
		newItem: ''
	}
	handleChange = (event) => {
		this.setState({ newItem: event.target.value });
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const { newItem } = this.state;
		if (!newItem.length) return;
		this.props.addNewItem(newItem);
		this.setState({ newItem: '' });
	}
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<form onSubmit={this.handleSubmit} className={classes.form}>
					<input onChange={this.handleChange} value={this.state.newItem} type='text' className={classes.input} />
					<button className={classes.button}>Add</button>
				</form>
			</Fragment>
		);
	}
}

TodoInput.propTypes = {
	classes: PropTypes.object.isRequired,
	addNewItem: PropTypes.func.isRequired
};

export default injectSheet(styles)(TodoInput);
