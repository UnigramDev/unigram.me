/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React, { Component } from 'react';
import './FeatureDigest.css';

class FeatureDigest extends Component {
  render() {
    return (
      <div className="featuredigest-root">
        <div className="container">
          <h1 className="featuredigest-header">Freedom of expression</h1>
          <div className="featuredigest-subheader sh1">
            Find out what you can do with Unigram.
          </div>
          <div className="row">
            <a className="col-sm-6 col-md-4 col-lg-3" href="#">
              <div className="featuredigest-feature">
                <div className="featuredigest-feature-title">
                  Calls
                </div>
                <p className="featuredigest-feature-descr">
                  Make HD end-to-end encrypted calls anywhere in the world.
                </p>
              </div>
            </a>
            <a className="col-sm-6 col-md-4 col-lg-3" href="#">
              <div className="featuredigest-feature">
                <div className="featuredigest-feature-title">
                  Photos and Videos
                </div>
                <p className="featuredigest-feature-descr">
                  Snap, record and share your best moments or make a quick video message.
                </p>
              </div>
            </a>
            <a className="col-sm-6 col-md-4 col-lg-3" href="#">
              <div className="featuredigest-feature">
                <div className="featuredigest-feature-title">
                  Stickers
                </div>
                <p className="featuredigest-feature-descr">
                  Because sometimes there is no better way to express how you feel.
                </p>
              </div>
            </a>
            <a className="col-sm-6 col-md-4 col-lg-3" href="#">
              <div className="featuredigest-feature">
                <div className="featuredigest-feature-title">
                  Groups
                </div>
                <p className="featuredigest-feature-descr">
                  Chat, organize and coordinate with multiple contacts with Groups up to 5000 members.
                </p>
              </div>
            </a>
            <a className="col-sm-6 col-md-4 col-lg-3" href="#">
              <div className="featuredigest-feature">
                <div className="featuredigest-feature-title">
                  Files
                </div>
                <p className="featuredigest-feature-descr">
                  Send any type of file up to 1.5GB each.
                </p>
              </div>
            </a>
            <a className="col-sm-6 col-md-4 col-lg-3" href="#">
              <div className="featuredigest-feature">
                <div className="featuredigest-feature-title">
                  GIFs
                </div>
                <p className="featuredigest-feature-descr">
                  Send animated images like it's the 90s!
                </p>
              </div>
            </a>
            <div className="featuredigest-explore col-sm-12 col-md-12 col-lg-6">
              <div className="featuredigest-feature-title">
                ...and much, much more!
              </div>
              <a className="btn btn-primary" href="#">Explore all features</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureDigest;