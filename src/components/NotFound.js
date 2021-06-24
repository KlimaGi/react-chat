import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    404! -{" "}
    <Link to="/" className="link-style">
      Go home
    </Link>
  </div>
);

export default NotFound;
