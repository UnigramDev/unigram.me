/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Footer component. It displays copyright and license info as well as other website links.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React, { Component } from 'react';
import * as Const from '../data/Constants';
import { Link } from 'react-router-dom'; 
import './Footer.css';

class Footer extends Component {
  render() {
    var currentYear = new Date().getFullYear();
    return (
      <div className="footer-root">
        <div className="container">
          <div className="row">
            <div className="footer-group col-xs-12 col-sm-6 col-md-3">
              <div className="footer-group-header">Social</div>
              <ul>
                <li><a href={Const.facebookLink}>Facebook</a></li>
                <li><a href={Const.twitterLink}>Twitter</a></li>
              </ul>
            </div>
            <div className="footer-group col-xs-12 col-sm-6 col-md-3">
              <div className="footer-group-header">Help</div>
              <ul>
                <li><a href="#dummylink">Support</a></li>
                <li><a href="#dummylink">FAQ</a></li>
                <li><a href={Const.githubAppUserManLink}>User Manual</a></li>
              </ul>
            </div>
            <div className="footer-group col-xs-12 col-sm-6 col-md-3">
              <div className="footer-group-header">Resources</div>
              <ul>
                <li><a href={Const.githubOrgLink}>GitHub</a></li>
                <li><a href={Const.githubAppDevManLink}>Developer Manual</a></li>
                <li><a href={Const.behanceLink}>Behanced</a></li>
              </ul>
            </div>
            <div className="footer-group col-xs-12 col-sm-6 col-md-3">
              <div className="footer-group-header">Values</div>
              <ul>
                <li><Link to={'/privacy'}>Privacy Policy</Link></li>
                <li><Link to={'/community'}>Community</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-license row"> 
            <div className="col-12">
              Content Copyright © 2016-{currentYear} Unigram.
            </div>
            <div className="col-12">
              Designed and built by <a href={Const.mateiGithubLink}>Matei Bogdan Radu</a>, code licensed 
              under <a href={Const.githubWebLicenseLink}>MIT</a>, source 
              available on <a href={Const.githubWebRepoLink}>Github</a>.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;