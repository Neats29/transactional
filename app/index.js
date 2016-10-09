import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './containers/Dashboard';
import { Logo } from './components/Logo'

export class App extends React.Component {
	render() {
		return (
			<div>
				<Logo />
				<Dashboard />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
