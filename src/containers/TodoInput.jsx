import React, { Component, Fragment } from 'react';

class TodoInput extends Component {
	render() {
		return (
			<Fragment>
				<form>
					<input type='text' />
					<button>Add</button>
				</form>
			</Fragment>
		);
	}
}

export default TodoInput;