import React from 'react';

//TODO: Add proptypes

export function ShowTransactions(props) {
	let data = props.transactions;
	const monify = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	let balance = data ? data.items[0].transaction.account_balance : '';
	//TODO: add LOADING (there is a bit of delay with the get request
	return (
		<div>
			{balance && <div>Current Balance: £{monify(balance)}</div>}
		</div>
	)
}
