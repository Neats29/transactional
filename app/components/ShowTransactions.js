import React from 'react';

//TODO: Add proptypes
export default class ShowTransactions extends React.Component {
	render() {
		let data = this.props.transactions;
		const monify = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		let balance = data ? data.items[0].transaction.account_balance : '';
		return (
			<div>
			{balance && <div>Current Balance: £{monify(balance)}</div>}
			</div>
		)
	}
}



