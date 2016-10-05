import React from 'react';
import { PropTypes } from 'react';

//TODO: Explore testing
export function ShowUser (props) {
	const beautify = (date) => date.split('-').reverse().join('-');
	let user = props.userInfo;
	let dob = user.date_of_birth ? beautify(user.date_of_birth) : '';
	let phoneNumber = user.phone_number ? user.phone_number.replace(/\B(?=(\d{3})+(?!\d))/g, ' '): '';
	let showFullAddress = (address) =>{
		let full = '';
		 full = address.street_address.join('\n')
		//TODO: check why the line break is not working
		 full = `${full}\n${address.locality}\n${address.postal_code}`;
		 return full;
	}
	return (
		<div>
			<ul>
				{user.name && <li className="list-group-item">Name: {user.name}</li>}
				{user.date_of_birth && <li className="list-group-item">Date of birth: {dob}</li>}
				{user.email && <li className="list-group-item">Email: {user.email}</li>}
				{user.phone_number && <li className="list-group-item">Phone Number: {phoneNumber}</li>}
				{user.address && <li className="list-group-item">Full Address: {showFullAddress(user.address)}</li>}
				{user.user_id && <li className="list-group-item">User ID: {user.user_id}</li>}
			</ul>
		</div>
	)
}

ShowUser.propTypes = {
	//look up the array props thing
	//userInfo: 
}

