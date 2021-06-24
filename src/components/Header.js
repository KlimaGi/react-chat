import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => (
  <header className="header p-3">
    <h1 className="mx-3">React chat</h1>
    <UserContext.Consumer>
      {({ user, logout }) => (
        <>
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
        </>
      )}
    </UserContext.Consumer>
  </header>
);

export default Header;
