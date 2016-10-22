import React, { PropTypes } from 'react';
import { styles } from '../styles/style';
import { reverseDate, cleanUpPhoneNum } from '../utils/cleanUp'
import { UserItem } from './UserItem';
import { ActionButtons } from './ActionButtons';

export function ShowUser (props) {
	const user = props.userInfo;
	let dob = user.date_of_birth ? reverseDate(user.date_of_birth) : '';
	let phoneNumber = user.phone_number ? cleanUpPhoneNum(user.phone_number): '';
	const showFullAddress = (address) => {
		let full = '';
		 full = address.street_address.join(' ');
		 return `${full} ${address.locality} ${address.postal_code}`;
	}
	let address = user.address ? showFullAddress(user.address): '';

	const UserInfoCollection = [
		{ item: user.name, 					label: "Name"},
		{ item: user.date_of_birth, label: "Date of Birth"},
		{ item: user.email, 				label: "Email"},
		{ item: phoneNumber, 				label: "Phone Number"},
		{ item: address, 						label: "Full Address"},
		{ item: user.user_id, 			label: "User Number"}
	];

	const renderUserItem = UserInfoCollection.map((obj, index) => {
		return index%2 == 0 ?
			<UserItem key={`user-info-${index}`} userItem={obj.item} label={obj.label} style={styles.listItem} /> :
			<UserItem key={`user-info-${index}`} userItem={obj.item} label={obj.label} />
	})

	return (
		<div className="row">
		<div className="col-md-8">
			<ul>
				{renderUserItem}
				<span>
					{
						user.user_id &&
						<li style={styles.listItem} className="list-group-item">
							<span style={styles.label}>Member since: </span>XX-XX-XX
							<br></br>
							<span style={styles.label}>Customer loyalty score: </span>(Based on previous loyalty behaviour or complaints)
						</li>
					}
				</span>
			</ul>
		</div>
		{ user.email && <ActionButtons /> }
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
