import React from 'react';
import { PropTypes } from 'react';
import { styles } from '../styles/style';

export default class GetUser extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12" style={styles.space}>
					<div style={styles.inline}>
						<label>Enter date of birth:</label>
						<div>
							<input style={styles.dobInput} type="text"/>
							<input style={styles.dobInput} type="text"/>
							<input style={styles.dobInput} type="text"/>
						</div>
					</div>
					<button className="btn btn-primary" onClick={this.props.fetchUserInfo}>Find User</button>
					<div>{this.props.dob}</div>
				</div>
			</div>
		)
	}
}

GetUser.propTypes = {
	fetchUserInfo: PropTypes.func.isRequired
}
