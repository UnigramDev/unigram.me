/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Home page. It displays all the presentation components like
 * the digest ones and Hero.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React, { Component } from 'react';
import Hero from '../../common/components/Hero';
import AboutDigest from '../home/components/AboutDigest';
import FeatureDigest from '../home/components/FeatureDigest';
import SupportDigest from '../home/components/SupportDigest';
import * as Const from '../../common/data/Constants';


/* First part of the Hero component: text and buttons. */
const hero1 = (
  <div>
    <h1>Unigram</h1>
    <div className="sh1">
      The Telegram client for Windows 10
    </div>
    <div className="jumbotron-btn-group">
      <a className="btn btn-primary" href={Const.DownloadLink}>Download</a>
      <a className="btn btn-secondary" href="#aboutdigest">Learn more</a>
    </div>
  </div>
);

/* Second part of the Hero component: image. */
const hero2 = (
  <img src="img/Laptop_Mobile_Combo.png" alt=""/>
);

class HomePage extends Component {
  
  render() {
    return (
      <div>
        <Hero part1={hero1} part2={hero2}/>
        <AboutDigest />
        <FeatureDigest />
        <SupportDigest />
      </div>
    );
  }
}

export default HomePage;