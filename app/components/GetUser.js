import React from 'react';

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
				<button onClick={this.props.onClick}>Find User</button>
			</div>
		)
	}
}



