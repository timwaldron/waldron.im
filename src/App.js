import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

export default class App extends React.Component {

  state = {
    currentView: "home",
  };

  handleView = () => {
    switch(this.state.currentView) {

      case "home":
      default:
        this.renderHome();
    }
  }

  updateView = (view) => {
    console.log("Updaing view to:", view);

    this.setState({
      currentView: view
    });
  }

  render = () => {
    return (
      <div className="App">
        <Navbar updateView={this.updateView}/>
        <Content selectedView={this.state.currentView}/>
        <Footer />
      </div>
    );
  }
}
