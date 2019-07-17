import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import logo from './logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand mx-auto display-1">
          <img src={logo} alt="Navbar Logo" className="d-inline-block mr-3" />
          GitHub Users
        </NavLink>
      </nav >
    );
  }
}

export default withRouter(Navbar);