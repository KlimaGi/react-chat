import { Component } from "react";
import React from "react";

class Input extends Component {
  state = {
    text: "",
  };

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.onSubmit(e)} className="row">
          <div className="col-10">
            <input
              className="form-control msg-input"
              onChange={(e) => this.onChange(e)}
              value={this.state.text}
              type="text"
              placeholder="Enter your message and press Enter"
              autoFocus="true"
            />
          </div>
          <div className="col-2">
            <button className="form-control btn btn-color">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
