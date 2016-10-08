import React from 'react';
import { styles } from '../styles/style';
import { monthify } from '../utils/monthify';

//TODO: Add proptypes
export function ShowTransactions(props) {
	//TODO: check for currency
	const monify = n => '£' + n.toString().replace('-', '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	const beautify = name => {
		 name = name.replace('_', ' ');
		 let first = name.charAt(0).toUpperCase();
		 return first + name.substring(1, name.length);
	};
	let data = props.transactions;
	let balance = data ? data.items[0].transaction.account_balance : '';
	//TODO: add LOADING (there is a bit of delay with the get request
	let transactionsList;
	if (data) {
		transactionsList = data.items.map((item, index) => {
			if (index < 10) {
				let trans = item.transaction;
				let name = trans.merchant ? trans.merchant.name : trans.description;
				return (
					<tbody key={`transactions-row-${index}`}>
						<tr >
							 <td colSpan="1" style={styles.transItem}>{monthify(trans.created)}</td>
							 <td colSpan="1" style={styles.transItem}>{beautify(trans.category)}</td>
							 <td colSpan="1" style={styles.transItem}>{name}</td>
							 <td colSpan="1" style={styles.transItem}>{monify(trans.amount)}</td>
						</tr>
						<tr>
						 	<td colSpan="4">{trans.merchant && trans.merchant.emoji}
								<br></br>{trans.merchant && trans.merchant.address.formatted}
								<br></br>Reference ID: {trans.id}
								<br></br><button style={styles.flagBtn} className="btn btn-info">Flag</button>
							</td>
						</tr>
					</tbody>
				)
			}
		});

		return (
				<div style={styles.space}>
					<div className="row">
						{balance &&
							<div>
								<div className="col-md-2" style={styles.balance}>Current Balance: {monify(balance)}</div>
								<div style={styles.space} className="col-md-2 dropdown">
									<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
										Filter by Date/Category/Amount
										<span className="caret"></span>
									</button>
								</div>
							</div>}
					</div>
					<div className="row">
						<div className="col-md-8">
							<table style={styles.table} className="table table-hover">
								{transactionsList}
							</table>
							</div>
					</div>
					<button className="btn btn-primary">Show all transactions</button>
				</div>
		)
	} else {
		return (
			<div style={styles.space}>No transactions yet</div>
		)
	}
}
