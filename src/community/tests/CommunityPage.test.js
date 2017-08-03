/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import CommunityPage from '../CommunityPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router><CommunityPage /></Router>, div)
})