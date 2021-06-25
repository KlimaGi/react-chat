import { Component } from "react";
import React from "react";

class Messages extends Component {
  render() {
    const { messages } = this.props;
    return <ul>{messages.map((m) => this.renderMessage(m))}</ul>;
  }
  renderMessage(messageItem) {
    const { user, message, timestamp } = messageItem;
    const { currentUser, avatarColor } = this.props;
    const messageFromMe = user === currentUser;
    const className = messageFromMe
      ? "messages-message currentUser"
      : "messages-message";
    const avatCol = messageFromMe ? avatarColor : "#0000ff";
    return (
      <li className={className} key={timestamp}>
        <div className="avatar" style={{ backgroundColor: avatCol }}></div>
        <div className="message-content">
          <div className="username">{user}</div>
          <div className="text">{message}</div>
        </div>
      </li>
    );
  }
}
export default Messages;
