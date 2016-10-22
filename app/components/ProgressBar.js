import React from 'react';

export function ProgressBar() {
	return (
		<div className="col-md-4">
			<div className="progress">
				<div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{"width": "100%"}}>
				</div>
			</div>
			<br></br>
		</div>
	)
}
