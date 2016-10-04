import React from 'react';
import ReactDOM from 'react-dom';
import UserInfoDashboard from './containers/UserInfoDashboard';

export class App extends React.Component {
	render() {
		return (
			<div>
				<UserInfoDashboard />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
