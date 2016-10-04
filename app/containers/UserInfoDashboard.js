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
		//const showAddress = (address) => address.street_address.map(a => a)
		getUserInfo().then(info => {
			this.setState({
				name: info.name,
				dob: beautify(info.date_of_birth),
				email: info.email,
				phone: info.phone_number,
				address: info.address.postal_code
			});
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
