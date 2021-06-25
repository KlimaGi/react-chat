import React from "react";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      metadata: [],
    };
    this.fetchRooms = this.fetchRooms.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.updateRooms = this.updateRooms.bind(this);
    this.handleAddRoom = this.handleAddRoom.bind(this);
  }

  async fetchRooms() {
    const roomsBin = await fetch(
      "https://api.jsonbin.io/v3/b/60d52fbe8ea8ec25bd151152",
      {
        headers: {
          "X-Master-Key":
            "$2b$10$moZ7ds3juFEmK5ceCEkED.KFx1VKwjFDFrVKc2Ezp92IlA8hvCoxO",
        },
      }
    ).then((res) => res.json());

    this.setState({
      rooms: roomsBin.record,
    });
  }

  async createRoom() {
    const roomData = await fetch("https://api.jsonbin.io/v3/b/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$moZ7ds3juFEmK5ceCEkED.KFx1VKwjFDFrVKc2Ezp92IlA8hvCoxO",
        "X-Bin-Versioning": "false",
      },
      body: JSON.stringify([
        {
          user: this.props.user,
          timestamp: Date.now(),
          message: "Welcome to new chat",
        },
      ]),
    }).then((res) => res.json());

    this.setState({
      metadata: roomData.metadata,
    });
  }

  async updateRooms() {
    await fetch("https://api.jsonbin.io/v3/b/60d52fbe8ea8ec25bd151152", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$moZ7ds3juFEmK5ceCEkED.KFx1VKwjFDFrVKc2Ezp92IlA8hvCoxO",
        "X-Bin-Versioning": "false",
      },
      body: JSON.stringify([
        ...this.state.rooms,
        {
          name: "room" + (this.state.rooms.length + 1),
          id: this.state.metadata.id,
        },
      ]),
    }).then((res) => res.json());

    await this.fetchRooms();
  }

  async componentDidMount() {
    await this.fetchRooms();
  }

  async handleAddRoom() {
    await this.createRoom();
    await this.updateRooms();
  }

  render() {
    return (
      <div className="rooms-box">
        <ul className="list-inline">
          {this.state.rooms.map((room) => this.renderRoom(room))}
          <li className="list-inline-item">
            <button
              onClick={this.handleAddRoom}
              className="btn btn-room-create px-3"
            >
              create
            </button>
          </li>
        </ul>
      </div>
    );
  }

  renderRoom(obj) {
    const { name, id } = obj;
    return (
      <li className="list-inline-item" key={id}>
        <button className="btn btn-room px-3">{name}</button>
      </li>
    );
  }
}

export default Rooms;
