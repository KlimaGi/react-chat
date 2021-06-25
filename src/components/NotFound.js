import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="error m-5 mx-auto p-5">
    <h5 class="text-center mt-5">
      <strong>404</strong> - Woops! The page you are looking for can't be found.
    </h5>

    <button className="btn btn-room-create m-5 form-control col-6 mx-auto">
      <Link to="/" className="link-to">
        Click
      </Link>
    </button>
  </div>
);

export default NotFound;
