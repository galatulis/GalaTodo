import React, { Fragment } from 'react';

const style = {
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

const TodoList = ({ todoItems }) => {
	return (
		<Fragment>
			<ul style={style.list}>
				{ todoItems.map(item => <li key={item.id} style={style.item}>{ item.text }</li>) }
			</ul>
		</Fragment>
	);
}

export default TodoList;