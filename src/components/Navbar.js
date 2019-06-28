import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {


  setNewView = (event) => {
    this.props.updateView(event.target.id);
  }

  render = () => {
    const tabs = ['home', 'about', 'projects', 'contact'];

    return (
      <div className="navbar-container">
        {tabs.map((tab, index) => {
          return (
            <div className="navbar-tab-container">
              <p key={index} className="navbar-tab" id={tab} onClick={this.setNewView}>{`{ ${tab} }`}</p>
            </div>
          );
        })}
      </div>
    );
  }
}