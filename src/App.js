import React, { Component } from 'react';
import "./index.css"
import Todo from './component/Todo/Todo';
import Add from './component/Additems/Add';
class App extends Component {
  state = {
    items: [
      { id: 1, name: 'amr', age: 22 },
      { id: 2, name: 'noha', age: 25 },
      { id: 3, name: 'adel', age: 24 }
    ]
  }
  deletitems = (id) => {
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id)
    // items.splice(i,1)
    ///// حل اخر للحذف
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({ items })
  }
  additem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item)
    this.setState({ items })

  }


  render() {
    return (
      <div className="App">
        <h1>TodoList App</h1>
        <Todo items={this.state.items} deletitems={this.deletitems} />
        <Add additem={this.additem} />
      </div>
    );
  }
}
export default App;
