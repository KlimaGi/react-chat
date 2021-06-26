import React from "react";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      metadata: [],
      id: "",
      roomN: "",
    };
    this.fetchRooms = this.fetchRooms.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.updateRooms = this.updateRooms.bind(this);
    this.handleAddRoom = this.handleAddRoom.bind(this);
    this.handleChooseRoom = this.handleChooseRoom.bind(this);
    this.sendRoom = this.sendRoom.bind(this);
  }

  async fetchRooms() {
    const roomsBin = await fetch(
      "https://api.jsonbin.io/v3/b/60d73f898a4cd025b7a62f4f",
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
          user: "cloudy sky chat",
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
    await fetch("https://api.jsonbin.io/v3/b/60d73f898a4cd025b7a62f4f", {
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

  handleChooseRoom(e) {
    this.state.rooms.map((room) => this.getNameId(room, e.target.id));
  }
  getNameId(r, butNam) {
    if (r.name === butNam) {
      this.setState({ id: r.id, roomN: r.name });
    }
  }

  sendRoom() {
    this.props.onChooseRoom(this.state.id, this.state.room);
  }

  render() {
    return (
      <div className="rooms-box px-5 header">
        <ul className="list-inline m-1">
          {this.state.rooms.map((room) => this.renderRoom(room))}
          <li className="list-inline-item m-1">
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
      <li className="list-inline-item m-1" key={id}>
        <button
          className="btn btn-room px-3"
          onMouseOver={this.handleChooseRoom}
          onClick={this.sendRoom}
          id={name}
        >
          {name}
        </button>
      </li>
    );
  }
}

export default Rooms;
