import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => (
  <header className="header p-3">
    <h1>React chat</h1>
    <UserContext.Consumer>
      {({ user, logout }) => (
        <>
          <NavLink to="/profile" activeClassName="is-active">{user}</NavLink>
          <NavLink to="/" activeClassName="is-active" exact={true}>Sign out</NavLink>
        </>
      )}
    </UserContext.Consumer>
  </header>
);

export default Header;