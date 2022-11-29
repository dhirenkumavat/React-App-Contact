import React, { Component } from "react";

class AddContact extends Component {
  state = { name: "", email: "" };
  handleEntailmentRequest = (e) => {
    e.preventDefault();
    if (this.state === "" || this.state.email === "") {
      alert("fields are required ");
      return;
    }
    this.props.addContacthelder(this.state);
    //  console.log(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className=" ui main">
        <h2>Add Contact</h2>
        <form
          className="ui form"
          onSubmit={this.handleEntailmentRequest}
          method=""
        >
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) =>
                this.setState({
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) =>
                this.setState({
                  email: e.target.value,
                })
              }
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
