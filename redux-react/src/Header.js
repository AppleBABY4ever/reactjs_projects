import React, { Component } from 'react';

class Header extends Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} value={this.props.title}/>
      </div>
    );
  }
}

export default Header;
