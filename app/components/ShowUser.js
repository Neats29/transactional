import React from 'react';

export default class UserInfo extends React.Component {
	render() {
		const beautify = (date) => date.split('-').reverse().join('-');
		var dob = ''
		if (this.props.userInfo.date_of_birth) {
			dob = beautify(this.props.userInfo.date_of_birth);
		}
		return (
			<div>
				<ul>
					<li className="list-group-item">{dob}</li>
				</ul>
			</div>
		)
	}
}


