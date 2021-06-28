import { Component } from "react";
import React from "react";

class Messages extends Component {
  render() {
    const { messages } = this.props;
    return <ul>{messages.map((m) => this.renderMessage(m))}</ul>;
  }
  renderMessage(messageItem) {
    const { user, message, timestamp, color } = messageItem;

    var time = new Date(timestamp);
    let date = `${time.getFullYear()}-${(time.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${time.getDate().toString().padStart(2, "0")} ${time
      .getHours()
      .toString()
      .padStart(2, "0")}:${time.getMinutes().toString().padStart(2, "0")}`;
    const { currentUser, avatarColor } = this.props;
    const messageFromMe = user === currentUser;
    const className = messageFromMe
      ? "messages-message currentUser"
      : "messages-message";
    const avatCol = messageFromMe ? avatarColor : color;
    return (
      <li className={className} key={timestamp}>
        <div className="avatar" style={{ backgroundColor: avatCol }}></div>
        <div className="message-content">
          <div className="username">
            {user}, <span className="date">{date}</span>
          </div>

          <div className="text">{message}</div>
        </div>
      </li>
    );
  }
}
export default Messages;
