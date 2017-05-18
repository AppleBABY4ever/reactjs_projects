import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Left extends Component{
	constructor(props){
		super(props);
		this.state={
			password:""
		}
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event){
		console.log(event.target.value);
		let {InputChange} = this.props;
		InputChange(event.target.value);
	}

	render(){
		let {InputChange} = this.props;
		let {password} = this.state;
		return (
			<div>
				<label className="control-label">Password</label>
				<input type="text" className="form-control" value={password} onChange={this.onInputChange}/>
			</div>
			)
	}
}

export default Left;