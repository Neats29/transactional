import React from 'react';
import axios from 'axios';
import GetUser from '../components/GetUser'

export default class UserInfoDashboard extends React.Component {
	handleClick() {
		axios.get('https://api.s101.nonprod-ffs.io/ops-engineer/profile')
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<GetUser onClick={this.handleClick.bind(this)}/>
			</div>
		)
	}
}
