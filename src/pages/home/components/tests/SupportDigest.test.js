/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React from 'react';
import ReactDOM from 'react-dom';
import SupportDigest from '..//SupportDigest';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SupportDigest />, div);
});