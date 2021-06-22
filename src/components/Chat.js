import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import { UserContext } from "../context/UserContext";

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
      "https://api.jsonbin.io/v3/b/60d2311d8ea8ec25bd134456",
      {
        headers: {
          "X-Master-Key":
            "$2b$10$j9/f4SpIHRRyy1IfvpRCXuLEicKJINln.mw6UzvUwXiVrZy2gy3JK",
        },
      }
    ).then((res) => res.json());

    this.setState({
      messages: messagesBin.record,
    });
  }

  async sendMessage(user, message) {
    await fetch("https://api.jsonbin.io/v3/b/60d2311d8ea8ec25bd134456", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$j9/f4SpIHRRyy1IfvpRCXuLEicKJINln.mw6UzvUwXiVrZy2gy3JK",
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
  }

  async componentDidMount() {
    await this.fetchMessages();
  }

  render() {
    return (
      <div>
        <main className="m-2">
          <UserContext.Consumer>
            {({ user }) => (
              <>
                <Messages messages={this.state.messages} currentUser={user} />

                <Input
                  onSendMessage={(inputText) =>
                    this.sendMessage(user, inputText)
                  }
                />
              </>
            )}
          </UserContext.Consumer>
        </main>
      </div>
    );
  }
}
