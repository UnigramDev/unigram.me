/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React, { Component } from 'react';
import "./FeatureDigestItem.css";

/**
 * @class A brief feature description. It should only be used by 
 * FeatureDigest in the home page.
 * 
 * @memberof HomePageSpace
 * @extends React.Component
 * @see {@link FeatureDigest.js|FeatureDigest}
 * @see {@link index.js|index}
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
class FeatureDigestItem extends Component {
  render() {
    return (
      <a className="col-6 col-sm-6 col-md-4 col-lg-3" href={this.props.value.link}>
        <div className="featuredigest-feature">
          <div className="featuredigest-feature-title">
            {this.props.value.title}
          </div>
          <p className="featuredigest-feature-descr">
            {this.props.value.descr}
          </p>
        </div>
      </a>
    );
  }
}

export default FeatureDigestItem;