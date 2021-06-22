import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header className="header p-3">
      <h1>React chat</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Sign out</NavLink>
      <NavLink to="/profile" activeClassName="is-active">Profile</NavLink>
  </header>
);

export default Header;