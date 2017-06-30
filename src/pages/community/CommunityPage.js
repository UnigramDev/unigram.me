/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Community page.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React from 'react';
import Hero from '../../common/components/Hero';
import * as Const from '../../common/data/Constants';
import './CommunityPage.css';

/* First part of the Hero component: text and buttons. */
const hero1 = (
  <div>
    <h1>Unigram Insiders Group</h1>
    <div className="sh1">
      Help shape the future of Unigram
    </div>
    <div className="jumbotron-btn-group">
      <a className="btn btn-primary" href={Const.insidersGroupLink}>
        Join the Insiders Group
      </a>
      <a className="btn btn-secondary" href="#aboutdigest">
        Learn more
      </a>
    </div>
  </div>
);

/* Second part of the Hero component: image. */
const hero2 = (
  <img src="/img/insider_logo.gif" alt="Unigram Logo" width="50%"/>
);


const CommunityPage = () => (
  <div className="main">
    <div className="community-root">
      <Hero part1={hero1} part2={hero2}/>
      <div className="container">
          <h1 className="featuredigest-header">By the Community, for the Communty</h1>
          <div className="featuredigest-subheader sh1">
            Be part of the family
          </div>
          <p>
            Unigram is not just the result of a few passionate developers. Since day one, 
            Unigram is a community driven project and it continues to grow thanks to its 
            large number of fans and enthusiasts.
          </p>
          <p>
            For this reason we created the <b>Unigram Insiders Group</b>, a public group
            where all enthusiasts can gather and talk about our favorite Windows messaging
            app.
          </p>
          <p>
            But what can you do in the group?
          </p>
          <p>
            <ul>
              <li>
                <b>
                  Talk with the developers
                </b>
                <br/>
                Give feedback on the app, report bugs and get support directly from the 
                developers or from experienced users.
              </li>
              <li>
                <b>
                  Discuss ideas, features and the future of Unigram
                </b>
                <br/>
                Share your ideas on how you think Unigram can become an even better app.
                Any kind of input helps!
              </li>
              <li>
                <b>
                  Get early builds and sneak peeks
                </b>
                <br/>
                Sneak peeks and early builds are regularly shared by the developers to get
                an initial feedback from you.
              </li>
            </ul>
          </p>
          <p>
            What are you waiting for? Join the family and help us shape the future of 
            Unigram!<br/>
            <a className="btn btn-primary" href={Const.insidersGroupLink}>
              Join the Insiders Group
            </a>
          </p>
      </div>
    </div>
  </div>
);

export default CommunityPage;