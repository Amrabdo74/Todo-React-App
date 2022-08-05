import React, { Component } from 'react';
import "../../index.css"
class Add extends Component {
  state = {
    name: "",
    age: ""
  }
  handelchange = (e) => {
    this.setState({

      [e.target.id]: e.target.value
    })

  }
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.additem(this.state)
    this.setState({
      name: "",
      age: ""
    })
  }
  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handelSubmit}>
          <input required type="text" placeholder='Enter Name ....' id='name' onChange={this.handelchange} value={this.state.name} />
          <input required type="number" placeholder='Enter age ....' id='age' onChange={this.handelchange} value={this.state.age} />
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }
}
export default Add;
