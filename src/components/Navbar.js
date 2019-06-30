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
            <div key={index} className="navbar-tab-container">
              <span>{'{ "'}</span>
              <p key={index} className="navbar-tab" id={tab} onClick={this.setNewView}>{tab}</p>
              <span>{'" }'}</span>
            </div>
          );
        })}
      </div>
    );
  }
}