import React from 'react';
import { styles } from '../styles/style';

//TODO: Add proptypes
export function ShowTransactions(props) {
	let data = props.transactions;
	const monify = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	let balance = data ? data.items[0].transaction.account_balance : '';
	//TODO: add LOADING (there is a bit of delay with the get request
	let transactionsList;
	if (data) {
		transactionsList = data.items.map((item, index) => {
			//TODO: change div to list item to show category, cost etc for each item
			if (index < 10) {
				let trans = item.transaction;
				let name = trans.merchant ? trans.merchant.name : trans.description;
				return (
					 <li className="list-group-item" key={`transaction-${index}`}>
						 <span style={styles.transItem}>{trans.category}</span>
						 <span style={styles.transItem}>{name}</span>
						 <span style={styles.transItem}>{trans.amount}</span>
					 </li>
				)
			}
		}); 
	}
	return (
		<div style={styles.space}>
			<div className="row">
				{balance && <div className="col-md-2" style={styles.balance}>Current Balance: £{monify(balance)}</div>}
			</div>
			<div className="row">
				<ul>
					{ data && transactionsList }
				</ul>
			</div>
		</div>
	)
}
