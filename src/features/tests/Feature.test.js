/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Feature from '../components/Feature'
import FeatureData from "../components/FeatureData"

it('renders without crashing', () => {
  const div = document.createElement('div')
  var data = new FeatureData(0, "title", true, "description", "path to picture", "anchor")
  ReactDOM.render(<Feature feature={data}/>, div)
})