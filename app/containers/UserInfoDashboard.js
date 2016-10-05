import React from 'react';
import axios from 'axios';
import GetUser from '../components/GetUser'
import { ShowUser } from '../components/ShowUser'
import { ShowTransactions } from '../components/ShowTransactions'
import { GetTransactions } from '../components/GetTransactions'
import { getUserInfo, getTransactionData } from '../utils/axiosHelpers'

export default class UserInfoDashboard extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			userInfo: '',
			transactions: ''
		}
	}

	fetchUserInfo() {
		getUserInfo().then(info => {
			this.setState({ userInfo: info });
		});
		console.log(this.state.userInfo)
	}

	fetchTransactions() {
		getTransactionData().then(data => {
			this.setState({ transactions: data });
		});
		//console.log(this.state.transactions)
	}

	render() {
		return (
			<div className="container">
				<GetUser fetchUserInfo={this.fetchUserInfo.bind(this)} />
				<ShowUser userInfo={this.state.userInfo}/>
				<GetTransactions fetchTransactions={this.fetchTransactions.bind(this)}/>
				<ShowTransactions transactions={this.state.transactions}/>
			</div>
		)
	}
}


