/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Navigation bar component.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React, { Component } from 'react';
import * as Const from '../data/Constants';
import { Link } from 'react-router-dom';
import './Navigation.css';



class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu= this.toggleMenu.bind(this);
    this.state = {
      active: false,
    };
  }

  /**
   * Toggle the menu on small screens.
   */
  toggleMenu() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    return (
      <nav className="navbar fixed-top navbar-toggleable-md">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            <img src="img/buttons/unigram.svg" alt="Unigram Logo"/>Unigram
          </Link>
          <div className={this.state.active ? 'navbar-collapse collapse show': 'navbar-collapse collapse'} id="navbarExample">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/features'} onClick={this.toggleMenu}>
                  <i className="mdl2 mdl2-favorite-list" aria-hidden="true"></i>Features
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={Const.DownloadLink} onClick={this.toggleMenu}>
                  <i className="mdl2 mdl2-download" aria-hidden="true"></i>Download
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/community'} onClick={this.toggleMenu}>
                  <i className="mdl2 mdl2-people" aria-hidden="true"></i>Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/support'} onClick={this.toggleMenu}>
                  <i className="mdl2 mdl2-accounts" aria-hidden="true"></i>Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <button className="navbar-toggler navbar-toggler-left" onClick={this.toggleMenu} type="button" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
          <img src="img/buttons/menu.svg" alt="Menu icon"/>
        </button>
      </nav>
    );
  }
}

export default Navigation;