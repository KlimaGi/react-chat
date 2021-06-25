import React from "react";
import Header from "./Header";
import Rooms from "./Rooms";
import Chat from "./Chat";
import { UserContext } from "../context/UserContext";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      room: "",
    };
  }

  parentFunction = (id) => {
    this.setState({ id: id });
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ user, color }) => (
          <div>
            <Header />
            <Rooms functionCallFromChatRoom={this.parentFunction} />
            <Chat
              currentUser={user}
              avatarColor={color}
              roomId={this.state.id}
              roomName={this.state.room}
            />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
export default ChatRoom;
