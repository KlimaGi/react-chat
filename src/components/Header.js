import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => (
  <header className="header pt-3 px-3 row">
    <div className="col mx-5">
      <h3 className="mx-3">
        <strong>cloudy sky chat</strong>
      </h3>
    </div>

    <UserContext.Consumer>
      {({ user, logout }) => (
        <>
          <div className="col offset-lg-6">
            <div className="col">
              <NavLink
                to="/"
                activeClassName="is-active"
                exact={true}
                className="link-style"
                onClick={logout}
              >
                Sign out
              </NavLink>
            </div>
            <div className="col">
              <NavLink
                to="/profile"
                activeClassName="is-active"
                className="link-style"
              >
                {user}
              </NavLink>
            </div>
          </div>
        </>
      )}
    </UserContext.Consumer>
  </header>
);

export default Header;
