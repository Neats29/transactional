import React from 'react';
import { PropTypes } from 'react';
import { styles } from '../styles/style'

export function Logo() {
	return (
		<div style={styles.space} className="row">
			<div>
				<div className="col-md-1">
					<a href="https://monzo.com/"><img src="../../assets/images/logo.svg" alt="Monzo"></img></a>
				</div>
			</div>
		</div>
	)
}
