import React from 'react';
import { PropTypes } from 'react';

export default class GetUser extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h3>D.O.B:</h3>
					<input type="text"/>
					<input type="text"/>
					<input type="text"/>
				</div>
				<button onClick={this.props.fetchUserInfo}>Find User</button>
				<div>{this.props.dob}</div>
			</div>
		)
	}
}

GetUser.propTypes = {
	fetchUserInfo: PropTypes.func.isRequired
}
