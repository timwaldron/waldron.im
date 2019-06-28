import React, { Component } from 'react';

import './Content.css';

export default class Content extends Component {

  homeView = () => {
    return (
      <>
        <h1>HOME</h1>
      </>
    );
  }

  aboutView = () => {
    return (
      <>
        <h1>ABOUT</h1>
      </>
    );
  }

  projectsView = () => {
    return (
      <>
        <h1>PROJECTS</h1>
      </>
    );
  }

  contactView = () => {
    return (
      <>
        <h1>CONTACT</h1>
      </>
    );
  }

  deliverView = () => {
    const { selectedView } = this.props;

    switch(selectedView) {
      case "about":
        return this.aboutView();

      case "projects":
        return this.projectsView();

      case "contact":
        return this.contactView();
        
      case "home":
      default:
        return this.homeView();
    }
  }

  render = () => {
    console.log("Contect props:", this.props);
    const htmlToRender = this.deliverView();

    return (
      <div className="content-container">
        {htmlToRender}
      </div>
    );
  }
}