import React from 'react';
import { PropTypes } from 'react';

export function GetTransactions(props) {
	return (
		<div>
			<div>
				<h3>Show </h3>
			</div>
			<button onClick={props.fetchTransactions}></button>
		</div>
	)
}

GetTransactions.propTypes = {
	fetchTransactions: PropTypes.func.isRequired
}

