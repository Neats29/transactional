import React from 'react';
import { styles } from '../styles/style';

export function TransactionsContent(props) {
	return (
		<div style={styles.space}>
			<div className="row">
				{
					props.balance &&
					<div>
						<div className="col-md-2" style={styles.balance}>Current Balance: {props.balance}</div>
						<div style={styles.space} className="col-md-2 dropdown">
							<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
								Filter by Date/Category/Amount
								<span className="caret"></span>
							</button>
						</div>
					</div>
				}
			</div>
			<div className="row">
				<div className="col-md-8">
					<table style={styles.table} className="table table-hover">
						{props.transactionsList}
					</table>
					</div>
			</div>
			<button className="btn btn-primary">Show all transactions</button>
		</div>
	)
}
