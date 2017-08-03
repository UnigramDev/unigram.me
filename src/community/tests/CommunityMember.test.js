/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React from 'react'
import ReactDOM from 'react-dom'
import CommunityMember from '../components/CommunityMember'
import CommunityMemberData from "../components/CommunityMemberData"

it('renders without crashing', () => {
  const div = document.createElement('div')
  var data = new CommunityMemberData(0, "Member name", "role", "path to picture")
  ReactDOM.render(<CommunityMember member={data}/>, div)
})