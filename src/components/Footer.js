import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {

  render = () => {
    return (
      <div className="footer-container">
        <a href="https://github.com/timwaldron" _target="blank">
          <div className="image-container">
            <img className="custom-image" alt="GitHub logo" src={process.env.PUBLIC_URL + "/images/github.png"} />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/timothy-waldron-1b700914b/" _target="blank">
          <div className="image-container">
            <img className="custom-image" alt="LinkedIn logo" src={process.env.PUBLIC_URL + "/images/linkedin.png"} />
          </div>
        </a>

        <a href="mailto:tim@waldron.im?Subject=Hey%20mate!">
          <div className="image-container">
            <img className="custom-image" alt="Email logo" src={process.env.PUBLIC_URL + "/images/email.png"} />
          </div>
        </a>

        <a href="tel:+61429777048">
          <div className="image-container">
            <img className="custom-image" alt="Phone logo" src={process.env.PUBLIC_URL + "/images/phone.png"} /> 
          </div>
        </a>
      </div>
    );
  }
}