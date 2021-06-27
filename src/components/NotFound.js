import React from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const NotFound = () => (
  <div>
    <Header />
    <div className="error m-5 mx-auto p-5">
      <h5 className="text-center mt-5">
        <strong>404</strong> - Woops! Something went wrong...
      </h5>

      <div className="btn btn-room-create m-5 form-control col-6 mx-auto">
        <NavLink to="/" className="link-to">
          Try again
        </NavLink>
      </div>
    </div>
  </div>
);

export default NotFound;
