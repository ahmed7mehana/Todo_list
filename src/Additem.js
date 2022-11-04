import { Component } from "react";
import { render } from "react-dom";

class Additem extends Component {
  state = {
    name: "",
    age: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: "",
      age: ""
    });
  };

  render() {
    return (
      <div className="inputs">
        <form onSubmit={this.submit}>
          <hr />
          <input
            className="serch"
            type="text"
            placeholder="what in your brian"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input className="btn" type="submit" value="lets do it" />
        </form>
      </div>
    );
  }
}

export default Additem;
