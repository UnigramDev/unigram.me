/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Features page. It showcases the various features provided
 * by the app.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React, { Component } from 'react'
import Feature from './components/Feature'
import FeatureData from "./data/FeatureData"
import './FeaturesPage.css'

class FeaturesPage extends Component {
    

  render() {
    var features = initFeatures();
    // Recursively create Project components.
    var featureComponents = features.map(feature =>
      <Feature value={feature} key={feature.id}/>
    )

    return (
      <div className="featurepage-root">
        <div className="container">
          <h3>The Telegram experience, handcrafted for Windows 10.</h3>
        </div>
      {featureComponents}
      </div>
    );
  }
}

/**
 * Initialized the Feature Digest array.
 * It collects the data from a local JSON file. 
 * 
 * @returns {Array} collection of Features.
 */
function initFeatures() {
  var features = [];
  var data = require('./data/FeatureItems.json');
  for(var i = 0; i < data.length; i++) {
    var featureJSON = data[i];
    features.push(new FeatureData(featureJSON.id,
                                        featureJSON.title, 
                                        featureJSON.descr,
                                        featureJSON.horizontal, 
                                        featureJSON.pic));
  }
  return features;
}

export default FeaturesPage;