import React, { Component, Fragment } from 'react';

class App extends Component {
	render() {
		return (
			<Fragment>
				<div align='center'>
					<h1>Todo App</h1>
					<form>
						<input type='text' />
						<button>Add</button>
					</form>
				</div>
			</Fragment>
		);
	}
}

export default App;