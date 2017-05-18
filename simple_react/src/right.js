import React, {Component} from 'react';
import {ProgressBar} from 'react-bootstrap';

class Right extends Component{
	constructor(props){
		super(props);

	}

	render(){
		const percent = this.props.percent;
		const progressStyle = {
			width: percent + "%"
		};
		return (
			<div className="well">
				<div className="progress">
					<div className="progress-bar" style={progressStyle}></div>
				</div>
				<p className="text-success">A good password is:</p>
				<ul>
					<li>6+ characters</li>
				</ul>
			</div>
			)
	}
}

export default Right;