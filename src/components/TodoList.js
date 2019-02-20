import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

function TodoList({ classes, todoItems, deleteItem }) {
	const handleClick = id => () => {
		deleteItem(id);
	};

	return (
		<ul className={classes.list}>
			{todoItems.map(item => (
				<li
					key={item.id}
					className={classes.item}
					onClick={handleClick(item.id)}
				>
					{item.text}
				</li>
			))}
		</ul>
	);
}

function styles() {
	return {
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
}

TodoList.propTypes = {
	classes: PropTypes.object.isRequired,
	todoItems: PropTypes.array.isRequired
};

export default injectSheet(styles())(TodoList);
