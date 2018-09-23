import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import TodoList from './components/TodoList';
import TodoInput from './containers/TodoInput';

const styles = {
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
	componentDidMount() {
		document.title = 'Todo App';
	}
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.content}>
					<h1 className={classes.title}>Todo App</h1>
					<TodoList />
					<TodoInput />
				</div>
			</Fragment>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(App);
