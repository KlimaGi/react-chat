import React from 'react';
import { Link } from 'react-router-dom';


const Profile = () => (
  <div>
  This is from Profile page
    <p>
      <Link to="chat">Chat</Link>
    </p>
  </div>
);

export default Profile;