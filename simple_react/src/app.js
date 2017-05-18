import React, {Component} from 'react';
import Left from './left';
import Right from './right';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			percent:0
		}
		this.HandleInputChange = this.HandleInputChange.bind(this);
	}

	HandleInputChange(p){
		this.setState({
			percent:p
		})
	}

	render(){
		const {percent} = this.state;
		return (
			<div className="container">
				<Row>
					<Col lg={8} md={8}>
						<Left InputChange={this.HandleInputChange}/>
					</Col>
					<Col lg={4} md={4}>
						<Right percent={percent}/>
					</Col>
				</Row>
			</div>
			)
	}
}

export default App;