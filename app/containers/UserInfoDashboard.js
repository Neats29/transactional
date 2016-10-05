import React from 'react';
import axios from 'axios';
import GetUser from '../components/GetUser'
import ShowUser from '../components/ShowUser'
import { getUserInfo } from '../utils/axiosHelpers'

export default class UserInfoDashboard extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			userInfo: ''
		}
	}

	handleClick() {
		//const beautify = (date) => date.split('-').reverse().join('-');
		//const showAddress = (address) => address.street_address.map(a => a)
		let arr = this.state.userInfo;
		getUserInfo().then(info => {
			this.setState({
				userInfo: info
			});
		});
		console.log(this.state.userInfo)
	}

	render() {
		return (
			<div>
				<GetUser onClick={this.handleClick.bind(this)} />
				<ShowUser userInfo={this.state.userInfo}/>
			</div>
		)
	}
}
