import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => (
  <header className="header pt-3 px-3 row g-0">
    <div className="col mx-5">
      <h3 className="mx-3">
        <strong>cloudy sky chat</strong>
      </h3>
    </div>

    <UserContext.Consumer>
      {({ user, color, logout }) => (
        <>
          <div className="offset-lg-5 col-sm-5 col-lg-2">
            <div className="col-7">
              <NavLink
                to="/"
                activeClassName="is-active"
                exact={true}
                className="link-style "
                onClick={logout}
              >
                Sign out
              </NavLink>
            </div>

            <div className="col-1">
              <NavLink
                to="/profile"
                activeClassName="is-active"
                className="link-style"
              >
                {user}
              </NavLink>
            </div>
          </div>
          <div className="col-1">
            <div
              className="avatar-top"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </>
      )}
    </UserContext.Consumer>
  </header>
);

export default Header;
