import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-root">
        <div className="container">
          <div className="row">
            <div className="footer-group col-3">
              <div className="footer-group-header">Social</div>
              <ul>
                <li><a href="">Facebook</a></li>
                <li><a href="">Twitter</a></li>
              </ul>
            </div>
            <div className="footer-group col-3">
              <div className="footer-group-header">Help</div>
              <ul>
                <li><a href="">Support</a></li>
                <li><a href="">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-group col-3">
              <div className="footer-group-header">Resources</div>
              <ul>
                <li><a href="">GitHub</a></li>
                <li><a href="">Behanced</a></li>
              </ul>
            </div>
            <div className="footer-group col-3">
              <div className="footer-group-header">Values</div>
              <ul>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Open Source</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-license row"> 
            Copyright © 2016-2017 Unigram
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;