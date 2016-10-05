import React from 'react';

export default class GetTransactions extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h3>Show </h3>
				</div>
				<button onClick={this.props.onClick}></button>
			</div>
		)
	}
}
