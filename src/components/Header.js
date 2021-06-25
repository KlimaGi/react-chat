import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Rooms from "./Rooms";

const Header = () => (
  <header className="header pt-3 px-3 row">
    <div className="col ">
      <h3 className="mx-3">
        <strong>cloudy sky chat</strong>
      </h3>
    </div>

    <UserContext.Consumer>
      {({ user, logout }) => (
        <>
          <div className="col offset-4">
            <NavLink
              to="/profile"
              activeClassName="is-active"
              className="link-style"
            >
              {user}
            </NavLink>
            <NavLink
              to="/"
              activeClassName="is-active"
              exact={true}
              className="link-style"
            >
              Sign out
            </NavLink>
          </div>
          <Rooms user={user} />
        </>
      )}
    </UserContext.Consumer>
  </header>
);

export default Header;
