import React from "react";
import Messages from "./Messages";
import Input from "./Input";

import "../styles/styles.css";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };

    this.fetchMessages = this.fetchMessages.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  async fetchMessages() {
    const messagesBin = await fetch(
      "https://api.jsonbin.io/v3/b/60d52fd68ea8ec25bd15115f",
      {
        headers: {
          "X-Master-Key":
            "$2b$10$moZ7ds3juFEmK5ceCEkED.KFx1VKwjFDFrVKc2Ezp92IlA8hvCoxO",
        },
      }
    ).then((res) => res.json());

    this.setState({
      messages: messagesBin.record,
    });
  }

  async sendMessage(user, message) {
    await fetch("https://api.jsonbin.io/v3/b/60d52fd68ea8ec25bd15115f", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$moZ7ds3juFEmK5ceCEkED.KFx1VKwjFDFrVKc2Ezp92IlA8hvCoxO",
        "X-Bin-Versioning": "false",
      },
      body: JSON.stringify([
        ...this.state.messages,
        {
          user,
          timestamp: Date.now(),
          message,
        },
      ]),
    }).then((res) => res.json());

    await this.fetchMessages();
    console.log(this.props.roomId);
    console.log(this.props.roomName);
  }

  async componentDidMount() {
    await this.fetchMessages();
  }

  render() {
    return (
      <>
        <div className="main-block mx-auto mt-0 mb-5" id="scroller">
          <Messages
            messages={this.state.messages}
            currentUser={this.props}
            avatarColor={this.props}
          />
          <div id="anchor"></div>
        </div>

        <div className="msg-input-box fixed-bottom pb-4 pt-4">
          <Input
            onSendMessage={(inputText) =>
              this.sendMessage(this.props.currentUser, inputText)
            }
          />
        </div>
      </>
    );
  }
}
