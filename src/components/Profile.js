import React from "react";
import { Link } from "react-router-dom";

const Profile = () => (
  <div className="profile-box mx-auto p-5">
    <div className="profile-circe mx-auto p-5"></div>

    <label className="form-label my-1">Edit your Email</label>
    <input type="email" className="form-control msg-input mb-3" />
    <label className="form-label my-1">Change password</label>
    <input type="email" className="form-control msg-input" />
    <button className="btn btn-room-create my-5 form-control col-6 mx-auto">
      <Link to="chat" className="link-style link-to">
        Chat
      </Link>
    </button>
  </div>
);

export default Profile;
