import React from 'react';
import axios from 'axios';
import GetUser from '../components/GetUser'
import { ShowUser } from '../components/ShowUser'
import { ShowTransactions } from '../components/ShowTransactions'
import { GetTransactions } from '../components/GetTransactions'
import { getUserInfo, getTransactionData } from '../utils/axiosHelpers'

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
		getUserInfo().then(info => {
			this.setState({ userInfo: info });
		});
	}

	fetchTransactions() {
		this.setState({ isLoading: true });
		getTransactionData().then(data => {
			this.setState({ transactions: data, isLoading: false });
		});
	}

	viewMoreDetails() {
		this.setState({ moreDetails: !this.state.moreDetails });
	}

	render() {
		return (
			<div className="container">
				<div>
					<GetUser fetchUserInfo={this.fetchUserInfo.bind(this)} />
					<ShowUser userInfo={this.state.userInfo}/>
					<GetTransactions fetchTransactions={this.fetchTransactions.bind(this)}/>
					<ShowTransactions transactions={this.state.transactions} isLoading={this.state.isLoading} viewMoreDetails={this.viewMoreDetails.bind(this)} moreDetails={this.state.moreDetails}/>
				</div>
			</div>
		)
	}
}
