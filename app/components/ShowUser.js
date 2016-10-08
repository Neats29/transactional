import React from 'react';
import { PropTypes } from 'react';
import { styles } from '../styles/style';
import { reverseDate } from '../utils/cleanUp'


export function ShowUser (props) {
	let user = props.userInfo;
	let dob = user.date_of_birth ? reverseDate(user.date_of_birth) : '';
	let phoneNumber = user.phone_number ? user.phone_number.replace(/\B(?=(\d{3})+(?!\d))/g, ' '): '';
	let showFullAddress = (address) =>{
		let full = '';
		 full = address.street_address.join(' ');
		 return `${full} ${address.locality} ${address.postal_code}`;
	}
	return (
		<div className="row">
		<div className="col-md-8">
			<ul>
				{
					props.userInfo.name &&
					<li style={styles.listItem} className="list-group-item">
						<span style={styles.label}>Name: </span>
						{props.userInfo.name}
					</li>
				}
				{
					user.date_of_birth &&
					<li className="list-group-item">
						<span style={styles.label}>Date of birth: </span>
						{dob}
					</li>
				}
				{
					user.email &&
					<li style={styles.listItem} className="list-group-item">
						<span style={styles.label}>Email: </span>
						{user.email}
					</li>
				}
				{
					user.phone_number &&
					<li className="list-group-item">
						<span style={styles.label}>Phone Number: </span>
						{phoneNumber}
					</li>
				}
				{
					user.address &&
					<li style={styles.listItem} className="list-group-item">
						<span style={styles.label}>Full Address: </span>
						{showFullAddress(user.address)}
					</li>
				}
				{
					user.user_id &&
					<li className="list-group-item">
						<span style={styles.label}>User ID: </span>
						{user.user_id}
					</li>
				}
				{
					user.user_id &&
					<li style={styles.listItem} className="list-group-item">
						<span style={styles.label}>Member since: </span>XX-XX-XX
						<br></br>
						<span style={styles.label}>Customer loyalty score: </span>(Based on previous loyalty behaviour or complaints)
					</li>
				}
			</ul>
		</div>
		{
			user.email &&
			<div className="col-md-2">
				<button style={styles.btnGroup} className="btn btn-primary">Update user info</button>
				<button style={styles.btnGroup} className="btn btn-success">Most important corresponces</button>
				<button style={styles.btnGroup} className="btn btn-info">Top up issues</button>
				<button style={styles.btnGroup} className="btn btn-warning">Forgot PIN</button>
				<button style={styles.btnGroup} className="btn ">All corresponces</button>
				<button style={styles.btnGroup} className="btn btn-danger">Close account</button>
			</div>
		}
		</div>
	)
}

ShowUser.propTypes = {
	userInfo: PropTypes.shape({
		name:          PropTypes.string,
		data_of_birth: PropTypes.string,
		email:         PropTypes.string,
		phone_number:  PropTypes.string,
		address:       PropTypes.object,
		user_id:       PropTypes.string
	})
}
