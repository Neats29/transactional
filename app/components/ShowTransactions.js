import React from 'react';

//TODO: Add proptypes
export function ShowTransactions(props) {
	let data = props.transactions;
	const monify = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	let balance = data ? data.items[0].transaction.account_balance : '';
	//TODO: add LOADING (there is a bit of delay with the get request
	let transactionsList;
	if (data) {
		transactionsList = data.items.map((a, index) => {
			//TODO: change div to list item to show category, cost etc for each item
			if (index < 10) 
				return (
					 <div>{a.transaction.category}</div>
				)
		}); 
	}
	return (
		<div>
			{balance && <div>Current Balance: £{monify(balance)}</div>}
			<div>
			{
				data && transactionsList
			}
			</div>
			
		</div>
	)
}
