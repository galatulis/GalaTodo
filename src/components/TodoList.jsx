import React, { Fragment } from 'react';
import injectSheet from 'react-jss';

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

export default injectSheet(styles)(TodoList);
