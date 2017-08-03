/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FeatureDigestData from "../FeatureDigestData";
import FeatureDigestItem from "./FeatureDigestItem";
import './FeatureDigest.css';

/**
 * @class An incomplete display of app features. It should be used 
 * only in the home page.
 * 
 * @memberof HomePageSpace
 * @extends React.Component
 * @see {@link index.js|index}
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
class FeatureDigest extends Component {
  render() {
    var features = initFeatures();
    // Recursively create Project components.
    var featureComponents = features.map(feature =>
      <FeatureDigestItem value={feature} key={feature.id}/>
    );
    return (
      <div className="featuredigest-root">
        <div className="container">
          <h1 className="featuredigest-header">Freedom of expression</h1>
          <div className="featuredigest-subheader sh1">
            Find out what you can do with Unigram.
          </div>
          <div className="row">
            {featureComponents}
            <div className="featuredigest-explore col-sm-12 col-md-12 col-lg-6">
              <div className="featuredigest-feature-title">
                ...and much, much more!
              </div>
              <Link className="btn btn-primary" to={'/features'}>Explore all features <i className="mdl2 mdl2-scroll-chevron-right-bold-legacy" aria-hidden="true"></i></Link>
            </div>
          </div>
        </div>
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
  var data = require('../../common/data/FeatureDigests.json');
  for(var i = 0; i < data.length; i++) {
    var featureJSON = data[i];
    features.push(new FeatureDigestData(featureJSON.id,
                                        featureJSON.title, 
                                        featureJSON.descr, 
                                        featureJSON.link));
  }
  return features;
}

export default FeatureDigest;