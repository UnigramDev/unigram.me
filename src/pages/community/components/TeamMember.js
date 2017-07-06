/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

import React, { Component } from 'react';
import './TeamMember.css';

class TeamMember extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
        <div className="team-member">
          <img className="rounded-circle" src={this.props.value.picture} alt={this.props.value.name}/>
          <h3>{this.props.value.name}</h3>
          <p className="text-muted">{this.props.value.role}</p>
        </div>
      </div>
    );
  }
}

export default TeamMember;