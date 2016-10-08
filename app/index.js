import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './containers/Dashboard';

export class App extends React.Component {
	render() {
		return (
			<div>
				<Dashboard />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
