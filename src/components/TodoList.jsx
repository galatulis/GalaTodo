import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

const styles = {
	item: {
		color: '#61dafb',
		fontSize: '1.5em',
		marginBottom: '20%'
	},
	list: {
		listStyle: 'none inside none',
		padding: '0',
		textAlign: 'left'
	}
};

const TodoList = ({ classes, todoItems }) => {
	return (
		<Fragment>
			<ul className={classes.list}>
				{ todoItems.map(item => <li key={item.id} className={classes.item}>{ item.text }</li>) }
			</ul>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	todoItems: state.todoItems
});

TodoList.propTypes = {
	classes: PropTypes.object.isRequired,
	todoItems: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(injectSheet(styles)(TodoList));
