import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {

  render = () => {
    return (
      <div className="navbar-container">
        <p class="navbar-tab">{ "{ Home }" }</p>
        <p class="navbar-tab">{ "{ About Me }" }</p>
        <p class="navbar-tab">{ "{ Projects }" }</p>
        <p class="navbar-tab">{ "{ Contact }" }</p>
      </div>
    );
  }
}