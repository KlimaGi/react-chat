import React from "react";
import Header from "./Header";
import Rooms from "./Rooms";
import Chat from "./Chat";
import { UserContext } from "../context/UserContext";
import ErrorBoundary from "./ErrorBoundary";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      room: "",
    };
  }

  // componentDidUpdate() {
  //   console.log(this.state.id);
  // }

  render() {
    return (
      <UserContext.Consumer>
        {({ user, color }) => (
          <div>
            <Header />

            <ErrorBoundary>
              <Rooms
                onChooseRoom={(id, room) =>
                  this.setState({ id: id, room: room })
                }
              />
            </ErrorBoundary>

            {(this.state.id === null ? false : true) && (
              <ErrorBoundary>
                <Chat
                  currentUser={user}
                  avatarColor={color}
                  roomId={this.state.id}
                  roomName={this.state.room}
                />
              </ErrorBoundary>
            )}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
export default ChatRoom;
