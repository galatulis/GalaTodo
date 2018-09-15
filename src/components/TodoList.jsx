import React, { Fragment } from 'react';

const TodoList = ({ todoItems }) => {
	return (
		<Fragment>
			<ul>
				{ todoItems.map(item => <li key={item.id}>{ item.text }</li>) }
			</ul>
		</Fragment>
	);
}

export default TodoList;