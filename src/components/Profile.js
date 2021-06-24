import React from "react";
import { Link } from "react-router-dom";

const Profile = () => (
  <div>
    This is from Profile page
    <p>
      <Link to="chat" className="link-style">
        Chat
      </Link>

      <label for="exampleColorInput" class="form-label">
        Color picker
      </label>
      <input
        type="color"
        class="form-control form-control-color"
        id="exampleColorInput"
        value="#563d7c"
        title="Choose your color"
      ></input>
    </p>
  </div>
);

export default Profile;
