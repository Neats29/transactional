import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
	render() {
		return (
			<div>
			Hello peeps
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
