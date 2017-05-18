import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  constructor(){
    super();
    this.state = {title:"welcome"};
  }
  changeTitle(title){
      this.setState({title});
  }
  render() {
    const name="emily";
    // setTimeout(()=>{
    //   this.setState({title:"come back"});
    // },2000);
    return (
      <div>
        <h1>hello {this.state.title}</h1>
        <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
      </div>
    );
  }
}

export default App;
