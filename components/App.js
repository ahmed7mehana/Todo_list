import "./style.css";
import TodoiTitem from "./Todoitem";
import { render } from "@testing-library/react";
import { Component } from "react";
import Additem from "./Additem";

class App extends Component {
  //example
  state = { items: [{ id: 1, name: "homework" }] };
  // ----------------------

  //delete
  del = (id) => {
    let items = this.state.items;
    let i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    this.setState(items);
  };
  // ---------------------

  //add all items
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  // -----------------------

  render() {
    return (
      <div className="App">
        <TodoiTitem items={this.state.items} delet={this.del} />
        <Additem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
