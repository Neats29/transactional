import React, { PropTypes } from 'react';
import { styles } from '../styles/style';

export function GetTransactions(props) {
	return (
		<div className="row" style={styles.space}>
			<button className="btn btn-primary" onClick={props.fetchTransactions}>Show the last 10 transactions</button>
		</div>
	)
}

GetTransactions.propTypes = {
	fetchTransactions: PropTypes.func.isRequired
}

