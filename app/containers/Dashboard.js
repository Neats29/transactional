import React from 'react';
import { GetUser } from '../components/GetUser'
import { ShowUser } from '../components/ShowUser'
import { ShowTransactions } from '../components/ShowTransactions'
import { GetTransactions } from '../components/GetTransactions'
import { Logo } from '../components/Logo'
import { getUserInfo, getTransactionData } from '../utils/fetchHelpers'

export default class Dashboard extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			userInfo: {},
			transactions: {},
			moreDetails: false,
			isLoading: false
		}
	}

	fetchUserInfo() {
		getUserInfo.then(info => {
			this.setState({ userInfo: info });
		});
	}

	fetchTransactions() {
		this.setState({ isLoading: true });
		getTransactionData.then(data => {
			this.setState({ transactions: data, isLoading: false });
		});
	}

	//for the transactions table. if you click on each row, the row is expanded to show more details
	viewMoreDetails() {
		this.setState({ moreDetails: !this.state.moreDetails });
	}

	render() {
		return (
			<div className="container">
				<div>
					<Logo />
					<GetUser fetchUserInfo={this.fetchUserInfo.bind(this)} />
					<ShowUser userInfo={this.state.userInfo}/>
					<GetTransactions fetchTransactions={this.fetchTransactions.bind(this)}/>
					<ShowTransactions
						transactions={this.state.transactions}
						isLoading={this.state.isLoading}
						viewMoreDetails={this.viewMoreDetails.bind(this)}
						moreDetails={this.state.moreDetails}/>
				</div>
			</div>
		)
	}
}
