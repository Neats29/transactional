import React from 'react';
import axios from 'axios';
import GetUser from '../components/GetUser'
import { getUserInfo } from '../utils/axiosHelpers'

export default class UserInfoDashboard extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			name: '',
			dob: '',
			email: '',
			phone: '',
			address: '',
			user_id: ''
		}
	}

	handleClick() {
		const beautify = (date) => date.split('-').reverse().join('-');
		getUserInfo().then(info => {
			this.setState({dob: beautify(info.date_of_birth)});
		});
	}

	render() {
		return (
			<div>
				<GetUser onClick={this.handleClick.bind(this)} dob={this.state.dob}/>
			</div>
		)
	}
}
