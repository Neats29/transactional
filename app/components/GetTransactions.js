import React from 'react';
import { PropTypes } from 'react';
import { styles } from '../styles/style';

export function GetTransactions(props) {
	return (
		<div className="row" style={styles.space}>
			<div class="col-md-8">
			</div>
			<button className="btn btn-primary" onClick={props.fetchTransactions}>Show the last 10 transactions</button>
		</div>
	)
}

GetTransactions.propTypes = {
	fetchTransactions: PropTypes.func.isRequired
}

