/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Features page. It showcases the various features provided
 * by the app to the user.
 * 
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React, { Component } from 'react'
import Feature from './components/Feature'
import FeatureData from './components/FeatureData'
import './FeaturesPage.css'

/**
 * @class Feature page main component. It is responsable for displaying 
 * the most relevant app features.
 *
 * @see {@link features/components/Feature.js|Feature}
 * @see {@link features/components/FeatureData.js|FeatureData}
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
class FeaturesPage extends Component {
  constructor(props) {
    super(props)

    /**  @member {Object[]} */
    this.features = this.initFeatures()
  }

  /**
   * Initializes the Feature components complete of data.
   * @see {@link features/components/Feature.js|Feature}
   * @return {Object[]} features[] - Array of Feature components.
   */
  initFeatures() {
    return this.initFeaturesData().map(data =>
      <Feature feature={data} key={data.id}/>
    )
  }

  /**
  * Initializes the Feature data array.
  * It collects the data from a JSON file.
  * 
  * @see {@link features/components/FeatureData.js|FeatureData}
  * @returns {Object[]} featuresData - Array of FeatureData.
  */
  initFeaturesData() {
    var featuresData = []
    var rawData = require('../common/data/Features.json')
    for(var feature of rawData) {
      featuresData.push(new FeatureData(feature.id, feature.title, feature.descr,
                                        feature.horizontal, feature.pic, feature.anchor)
      )
    }
    return featuresData
  }
  
  render() {
    return (
      <div className="featurepage-root">
        <div className="container">
          <h3>The Telegram experience, handcrafted for Windows 10.</h3>
        </div>
        {this.features}
      </div>
    )
  }
}

export default FeaturesPage