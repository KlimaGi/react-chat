import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import ErrorBoundary from "./ErrorBoundary";
import LoadingDots from "./LoadingDots";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      roomId: null,
      loading: false,
    };

    this.fetchMessages = this.fetchMessages.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      roomId: props.roomId,
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.roomId !== prevProps.roomId) {
      this.fetchMessages();
    }
  }

  async fetchMessages() {
    const messagesBin = await fetch(
      "https://api.jsonbin.io/v3/b/" + this.state.roomId,
      {
        headers: {
          "X-Master-Key":
            "$2b$10$Dvfzw5hIL0gWJIBoO2mdPOxp1RaRB8PNeXxzBxiWrs/2fVrbVeNY6",
        },
      }
    ).then((res) => res.json());

    this.setState({
      loading: true,
      messages: messagesBin.record,
    });
  }

  async sendMessage(user, message) {
    await fetch("https://api.jsonbin.io/v3/b/" + this.state.roomId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$Dvfzw5hIL0gWJIBoO2mdPOxp1RaRB8PNeXxzBxiWrs/2fVrbVeNY6",
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
      <>
        {!this.state.loading ? (
          <div className="m-5">
            <LoadingDots />
          </div>
        ) : (
          <>
            <ErrorBoundary>
              <div className="main-block mx-auto mt-0 mb-5" id="scroller">
                <Messages
                  messages={this.state.messages}
                  currentUser={this.props}
                  avatarColor={this.props}
                />
                <div id="anchor"></div>
              </div>
            </ErrorBoundary>
            <ErrorBoundary>
              <div className="msg-input-box fixed-bottom pb-4 pt-4">
                <Input
                  onSendMessage={(inputText) =>
                    this.sendMessage(this.props.currentUser, inputText)
                  }
                />
              </div>
            </ErrorBoundary>
          </>
        )}
      </>
    );
  }
}
