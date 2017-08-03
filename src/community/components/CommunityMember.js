/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React, { Component } from 'react'
import './CommunityMember.css'

/**
 * @class Single member component. It describes a community team member 
 * with an image, name and role.
 * 
 * @memberof CommunityPageSpace
 * @extends React.Component
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
class CommunityMember extends Component {
  render() {
    return (
      <div className="teammember-root col-lg-4 col-md-6 col-sm-6 mx-auto">
        <img className="rounded-circle" src={this.props.member.picture} alt={this.props.member.name}/>
        <h3>{this.props.member.name}</h3>
        <p className="text-muted">{this.props.member.role}</p>
      </div>
    )
  }
}

export default CommunityMember