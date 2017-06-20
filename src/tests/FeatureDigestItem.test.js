/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React from 'react';
import ReactDOM from 'react-dom';
import FeatureDigestItem from '../home/components/FeatureDigestItem';
import FeatureDigestData from "../home/data/FeatureDigestData";

it('renders without crashing', () => {
  const div = document.createElement('div');
  var feature = new FeatureDigestData("title","description","somelink");
  ReactDOM.render(<FeatureDigestItem value={feature}/>, div);
});