/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

import React, { Component } from 'react';
import Hero from '../home/components/Hero';
import AboutDigest from '../home/components/AboutDigest';
import FeatureDigest from '../home/components/FeatureDigest';
import SupportDigest from '../home/components/SupportDigest';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <AboutDigest />
        <FeatureDigest />
        <SupportDigest />
      </div>
    );
  }
}

export default HomePage;