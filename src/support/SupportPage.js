/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * Support page. It displays options on how to contact the developers
 * for support.
 * 
 * @namespace SupportPageSpace
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React from 'react'
import * as Const from '../common/data/Constants'
import './SupportPage.css'

/**
 * @class Support page. It displays options on how to contact the developers
 * for support.
 * 
 * @memberof SupportPageSpace
 * @extends React.Component
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
const SupportPage = () => (
  <div className="support-root">
    <div className="container">
      <div className="row">
        <div className="support-logo col-12 col-md-6 col-lg-4 offset-lg-2">
          <img src="/img/favicons/android-chrome/512x512.png" alt="Unigram Logo"/>
        </div>
        <div className="support-descr col-12 col-md-6 col-lg-4">
          <h2>Contact us</h2>
          <p>
            Need help with Unigram? Join our Unigram Insiders group on Telegram.
          </p>
          <p>
            Join our community and have a chance to talk with our most expert Insider 
            members and with the development team.
          </p>
          <a className="btn btn-primary" href={Const.insidersGroupLink}>Join the group <i className="mdl2 mdl2-scroll-chevron-right-bold-legacy" aria-hidden="true"></i></a>
        </div>
      </div>
      <h3>More support options</h3>
      <hr/>
      <div className="support-more row">
        <div className="col-12 col-md-4 col-lg-4">
          <h5>Social Networks</h5>
          <p>
            Mention @UnigramApp on Twitter or send us a message through 
            our Facebook page.
          </p>
          <ul>
            <li><a href={Const.twitterLink}>Twitter</a></li>
            <li><a href={Const.facebookMessageLink}>Facebook</a></li>
          </ul>
        </div>
        <div className="col-12 col-md-4 col-lg-4">
          <h5>Email</h5>
          <p>
            Write directly the development team a good old fashioned email.
          </p>
          <a href={Const.privacyContactEmail}>{Const.privacyEmail}</a>
        </div>
        <div className="col-12 col-md-4 col-lg-4">
          <h5>GitHub</h5>
          <p>
            If you're familiar with the platform, check through the active issues
            on GitHub and add your own if it's not been already addressed.
          </p>
          <a href={Const.githubAppIssueLink}>GitHub Issues</a>
        </div>
      </div>
    </div>
  </div>
)

export default SupportPage