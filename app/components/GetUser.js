import React from 'react';
import { PropTypes } from 'react';
import { styles } from '../styles/style';

export default class GetUser extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12" style={styles.space}>
					<div style={styles.inline}>
						<label>Enter email address:</label>
						<div>
							<input style={styles.emailInput} type="text"/>
						</div>
						<label>Enter security number:</label>
						<div>
							<input style={styles.securityNumber} type="text"/>
							<input style={styles.securityNumber} type="text"/>
							<input style={styles.securityNumber} type="text"/>
						</div>
					</div>
					<button className="btn btn-primary" onClick={this.props.fetchUserInfo}>Find User</button>
				</div>
			</div>
		)
	}
}

GetUser.propTypes = {
	fetchUserInfo: PropTypes.func.isRequired
}
