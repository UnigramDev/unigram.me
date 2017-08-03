/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

/**
 * @class Component to display a 404 message.
 * 
 * @extends React.Component
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
const NotFound = () => (
  <div className="main">
    <div className="notfound-root">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <img src="/img/unigram_missing.svg" alt=""/>
          <h1>404</h1>
          <p>
            Whatever you're looking for is not here.
          </p>
          <Link className="btn btn-primary" to={'/'}>Back to homepage <i className="mdl2 mdl2-scroll-chevron-right-bold-legacy" aria-hidden="true"></i></Link>
        </div>
      </div>
    </div>
  </div>
)

export default NotFound