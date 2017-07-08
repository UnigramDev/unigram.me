/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file A brief introduction of the app. It should be used only in the home page.
 * @see {@link index.js|index}
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './AboutDigest.css';

class AboutDigest extends Component {
  render() {
    return (
      <div className="aboutdigest-root" id="#aboutdigest">
        <div className="container">
          <h1 className="featuredigest-header">Truly universal</h1>
          <div className="featuredigest-subheader sh1">
            Desktop, Mobile, Xbox, Hololens
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <img src="img/screenshots/desktop-group-1.png" alt=""/>
            </div>
            <div className="aboutdigest-text col-md-12 col-lg-6">
              <p>
                Unigram is a fully fledged Universal Windows Platform app, giving you
                the most complete Telegram experience seamlessly across all your favorite
                Windows 10 devices.
              </p>
              <p>
                Since day one, Unigram is a community driven project and it continues to grow
                thanks to its large number of fans and enthusiasts. Join our Unigram Insiders 
                Group and partecipate in the making of Unigram!<br/>
                <Link className="btn btn-primary" to={'/community'}>Learn about the Community</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutDigest;