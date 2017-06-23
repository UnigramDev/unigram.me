/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Component to display a 404 message.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="main">
        <div className="notfound-root">
          <h1>404</h1>
          <p>
            The page you are looking for doesn't seem to exist.
          </p>
          <Link className="btn btn-primary" to={'/'}>Go to homepage</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;