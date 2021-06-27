import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Profile = () => (
  <div>
    <Header />
    <div className="profile-box mx-auto p-5 m-5">
      <div className="profile-circe mx-auto p-5"></div>

      <div>
        <label className="form-label my-1">Edit your Email</label>
        <input type="email" className="form-control msg-input mb-3" />
        <label className="form-label my-1">Change password</label>
        <input type="email" className="form-control msg-input" />
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-room-create px-5 my-5 ">Submit</button>
        <button className="btn btn-room-create px-2 my-5">
          <Link to="chatroom" className="link-to">
            Back to Chat
          </Link>
        </button>
      </div>
    </div>
  </div>
);

export default Profile;
