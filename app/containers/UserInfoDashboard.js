import React from 'react';
import axios from 'axios';
import GetUser from '../components/GetUser'
import ShowUser from '../components/ShowUser'
import { ShowTransactions } from '../components/ShowTransactions'
import GetTransactions from '../components/GetTransactions'
import { getUserInfo, getTransactionData } from '../utils/axiosHelpers'

export default class UserInfoDashboard extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			userInfo: '',
			transactions: ''
		}
	}

	handleClick() {
		getUserInfo().then(info => {
			this.setState({ userInfo: info });
		});
		console.log(this.state.userInfo)
	}

	getTransactions() {
		getTransactionData().then(data => {
			this.setState({ transactions: data });
		});
		//console.log(this.state.transactions)
	}

	render() {
		return (
			<div className="container">
				<GetUser onClick={this.handleClick.bind(this)} />
				<ShowUser userInfo={this.state.userInfo}/>
				<GetTransactions onClick={this.getTransactions.bind(this)}/>
				<ShowTransactions transactions={this.state.transactions}/>
			</div>
		)
	}
}
