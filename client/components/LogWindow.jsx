import React from 'react';
import Log from './Log.jsx';

class LogWindow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="logWindow">
				<Log />
				<Log />
				<Log />
			</div>
		);
	}

}

export default LogWindow;