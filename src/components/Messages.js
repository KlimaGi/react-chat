import { Component } from "react";
import React from "react";

class Messages extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="Messages-list">
        {messages.map((m) => this.renderMessage(m))}
      </ul>
    );
  }
  renderMessage(messageItem) {
    const { user, message, timestamp } = messageItem;
    const { currentUser } = this.props;
    const messageFromMe = user === currentUser;
    const className = messageFromMe
      ? "Messages-message currentUser"
      : "Messages-message";
    return (
      <li className={className} key={timestamp}>
        <span className="avatar" />
        <div className="Message-content">
          <div className="username">{user}</div>
          <div className="text">{message}</div>
        </div>
      </li>
    );
  }
}
export default Messages;
