/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-root">
        <div className="container">
          <div className="row">
            <div className="footer-group col-xs-12 col-sm-6 col-md-3">
              <div className="footer-group-header">Social</div>
              <ul>
                <li><a href="https://www.facebook.com/UnigramApp/">Facebook</a></li>
                <li><a href="https://twitter.com/UnigramApp">Twitter</a></li>
              </ul>
            </div>
            <div className="footer-group col-xs-12 col-sm-6 col-md-3">
              <div className="footer-group-header">Help</div>
              <ul>
                <li><a href="#">Support</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-group col-xs-12 col-sm-6 col-md-3">
              <div className="footer-group-header">Resources</div>
              <ul>
                <li><a href="https://github.com/UnigramDev">GitHub</a></li>
                <li><a href="https://www.behance.net/gallery/37507573/Unigram-for-Windows-10-Mobile">Behanced</a></li>
              </ul>
            </div>
            <div className="footer-group col-xs-12 col-sm-6 col-md-3">
              <div className="footer-group-header">Values</div>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-license row"> 
            <div className="col-12">
              Content Copyright © 2016-2017 Unigram.
            </div>
            <div className="col-12">
              Designed and built by <a href="https://github.com/mateiradu">Matei Bogdan Radu</a>, code licensed 
              under <a href="https://github.com/UnigramDev/unigram.me/blob/master/LICENSE">MIT</a>, source 
              available on <a href="https://github.com/UnigramDev/unigram.me/">Github</a>.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;