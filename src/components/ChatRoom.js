import React from "react";
import Header from "./Header";
import Rooms from "./Rooms";
import Chat from "./Chat";
import { UserContext } from "../context/UserContext";

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
            <Rooms
              onChooseRoom={(id, room) => this.setState({ id: id, room: room })}
            />

            {(this.state.id === null ? false : true) && (
              <Chat
                currentUser={user}
                avatarColor={color}
                roomId={this.state.id}
                roomName={this.state.room}
              />
            )}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
export default ChatRoom;
