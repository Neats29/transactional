import React, { PropTypes } from 'react';
import { styles } from '../styles/style';
import { monthify, beautify, monify } from '../utils/cleanUp';
import { ProgressBar } from './ProgressBar';
import { TransactionsContent } from './TransactionsContent';

export function ShowTransactions(props) {
	//Had to add this check
	//because props.transactions would evaluate to null while it's fetching data.
	//Could fix by setting initial value of this.state.transactions to empty string but doesn't feel right and propTypes would complain about the discrepancy between the types
	let data = Object.getOwnPropertyNames(props.transactions).length > 0 ? props.transactions : null;

	let balance = data ? data.items[0].transaction.account_balance : '';
	const clone = Object.assign({}, styles.moreDetails);
	clone.display = props.moreDetails ? "table-cell" : "none";

	let transactionsList;
	if (data && !props.isLoading) {
		transactionsList = data.items.map((item, index) => {
			if (index < 10) {
				let trans = item.transaction;
				let name = trans.merchant ? trans.merchant.name : trans.description;
				return (
					<tbody key={`transactions-row-${index}`}>
						<tr onClick={props.viewMoreDetails} style={styles.table}>
							 <td colSpan="1" style={styles.transItem}>{monthify(trans.created)}</td>
							 <td colSpan="1" style={styles.transItem}>{beautify(trans.category)}</td>
							 <td colSpan="1" style={styles.transItem}>{name}</td>
							 <td colSpan="1" style={styles.transItem}>{monify(trans.amount)}</td>
						</tr>
						<tr>
						 	<td style={clone} colSpan="4">{trans.merchant && trans.merchant.emoji}
								<br></br>{trans.merchant && trans.merchant.address.formatted}
								<br></br>Reference ID: {trans.id}
								<br></br><button style={styles.flagBtn} className="btn btn-info">Flag</button>
							</td>
						</tr>
					</tbody>
				)
			}
		});
	}

	return data && !props.isLoading ? 
		<TransactionsContent balance={monify(balance)} transactionsList={transactionsList} /> :
		props.isLoading ? <ProgressBar /> :
		<div style={styles.space}>No transactions yet</div>;
}


ShowTransactions.propTypes = {
	transactions:  	 PropTypes.object.isRequired,
	isLoading: 			 PropTypes.bool.isRequired,
	viewMoreDetails: PropTypes.func,
	moreDetails: 		 PropTypes.bool
}
