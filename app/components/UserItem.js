import React, { PropTypes } from 'react';
import { styles } from '../styles/style';

export function UserItem(props) {
	const item = props.userItem;
	const label = props.label;
	return (
		<span>
			{ item &&
			<li style={props.style} className="list-group-item">
				<span style={styles.label}>{label}: </span>
				{item}
			</li>
			}
		</span>
	)
}
