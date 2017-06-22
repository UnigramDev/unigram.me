/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Hero component. It displays a brief but important information with a banner style.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React, { Component } from 'react';
import * as Const from '../../../common/data/Constants';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero-root">
        <div className="jumbotron-wrapper container">
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <h1>Unigram</h1>
                  <div className="sh1">
                    The Telegram client for Windows 10
                  </div>
                  <div className="jumbotron-btn-group">
                    <a className="btn btn-primary" href={Const.DownloadLink}>Download</a>
                    <a className="btn btn-secondary" href="#aboutdigest">Learn more</a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <img src="img/Laptop_Mobile_Combo.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;