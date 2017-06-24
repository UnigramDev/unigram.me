/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Privacy page. It displays the privacy policy to the user.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React, { Component } from 'react';
import * as Const from '../../common/data/Constants';
import './PrivacyPage.css';

class PrivacyPage extends Component {
  render() {
    /* TODO: add more info on how we handle user data. */
    return (
      <div className="main">
        <div className="privacy-root">
          <div className="container">
            <div className="privacy-heading">
              <h1>Privacy Policy</h1>
              <p className="privacy-update">Last Updated: <b>{Const.privacyUpdate}</b></p>
              <p className="text-muted sh2">
                You don't have to take our word on all of this. Unigram is an open source project. Anyone 
                can study our <a href="https://github.com/UnigramDev/Unigram">Source Code</a> and make an 
                informed decision.
              </p>
            </div>
            <div className="privacy-body">
              <h3>Telegram service</h3>
              <hr/>
              <p>
                Unigram makes use of the <a href="https://telegram.org/">Telegram</a> service. If you 
                choose to use this application, you should familiarize yourself 
                with <a href="https://telegram.org/privacy">Telegram's Privacy Policy</a> as well. 
              </p>
              <h3>Contact information</h3>
              <hr/>
              <p>
                If there are any questions regarding this privacy policy you may contact us 
                at <a href={Const.privacyContactEmail}>{Const.privacyEmail}</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PrivacyPage;