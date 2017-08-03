/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React, { Component } from 'react'
import './Hero.css'

/**
 * @class Hero component. It displays a brief but important information with a
 * banner style.
 * 
 * @extends React.Component
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
class Hero extends Component {
  render() {
    return (
      <div className="hero-root">
        <div className="jumbotron-wrapper container">
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  {this.props.part1}
                </div>
                <div className="hero-part2 col-md-6 col-lg-6">
                  {this.props.part2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero