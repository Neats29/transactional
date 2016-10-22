import React from 'react';
import { styles } from '../styles/style';

export function ActionButtons() {
	return (
		<div className="col-md-2">
			<button style={styles.btnGroup} className="btn btn-primary">Update user info</button>
			<button style={styles.btnGroup} className="btn btn-success">Most important corresponces</button>
			<button style={styles.btnGroup} className="btn btn-info">Top up issues</button>
			<button style={styles.btnGroup} className="btn btn-warning">Forgot PIN</button>
			<button style={styles.btnGroup} className="btn">All corresponces</button>
			<button style={styles.btnGroup} className="btn btn-danger">Close account</button>
		</div>
	)
}
