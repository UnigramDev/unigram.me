/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Frequently Asked Questions page.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React, { Component } from 'react';
import * as Const from '../../common/data/Constants';
import { Link } from 'react-router-dom'; 
import './FaqPage.css';

class FaqPage extends Component {
  render() {
    return (
      <div className="main">
        <div className="faq-root">
          <div className="container">
            <div className="faq-heading">
              <h1>Frequently Asked Questions</h1>
              <p className="faq-update">Last Updated: <b>{Const.faqUpdate}</b></p>
              <p className="text-muted sh2">
                This FAQ provides answers to some basic questions about Unigram. For more 
                information about the underlying Telegram service, check the 
                official <a href="https://telegram.org/faq">Telegram FAQ</a> and 
                the <a href="https://telegram.org/techfaq">Advanced FAQ</a>.
              </p>
            </div>
            <div className="faq-body">
              <h3>What is Unigram?</h3>
              <hr/>
              <p>
                Unigram is an open-source third-party client 
                for <a href="https://telegram.org/">Telegram</a> specifically designed for 
                the Windows 10 ecosystem. 
              </p>
              <h3>How is it different from Telegram?</h3>
              <hr/>
              <p>
                Unigram is a <a href="https://docs.microsoft.com/en-us/windows/uwp/get-started/whats-a-uwp"> Universal 
                Windows Platform (UWP)</a> application, the official Telegram clients for Windows and Windows Mobile are not.
              </p>
              <p>
                What this means is that Unigram fully embraces the Windows 10 design language 
                and takes full advantage of the unique features and APIs that this platform 
                offers, like Continuum, adaptive design and a seemless experience across all 
                Windows 10 devices. 
              </p>
              <h3>How much does Unigram cost?</h3>
              <hr/>
              <p>
                Unigram is free software, both as in free beer and as in free speech.
              </p>
              <h3>How old is Unigram?</h3>
              <hr/>
              <p>
                Development started on May 23, 2016. The alpha version was officially released 
                on the Microsoft Store as a preview on March 27, 2017.
              </p>
              <h3>What is the origin of the name <i>Unigram</i>?</h3>
              <hr/>
              <p>
                Unigram is a contraction between <i>Universal</i> since our app is UWP and 
                <i>Telegram</i> which is the underlying service. Do not confuse it with 
                an <a href="https://en.wikipedia.org/wiki/N-gram">n-gram</a> of size 1, 
                often referred as "Unigram".
              </p>
              <h3>Do you have a Privacy Policy?</h3>
              <hr/>
              <p>
                Sure, check <Link to={"/privacy"}>this</Link> out.
              </p>
              <h3>When will I have a new build/release?</h3>
              <hr/>
              <p>
                We release new builds only when it's meaningful, like when a new feature is 
                implemented up to a usable state. Some features need more time than others, so 
                we don't see much sense in scheduling releases if most of the times it means 
                shipping unfinished software.
              </p>
              <p>
                In other words, Soon<span role="img" aria-label="Trademark">™️</span>.
              </p>
              <h3>Why can't I use secret chats?</h3>
              <hr/>
              <p> 
                Secret chats are not available at the moment in Unigram. In the current state 
                of development, user content is not locally stored on the device and since 
                secret chats are not stored in the cloud, there is no way of having this type 
                of conversation. This feature will arrive eventually.
              </p>
              <h3>I am a developer, can I help?</h3>
              <hr/>
              <p>
                Yes, check out our <a href={Const.githubAppRepoLink}>repos</a> and take 
                a look at open issues that are a good fit for your skill level and interest. 
                We <i>strongly</i> advise you to also join 
                our <a href={Const.insidersGroupLink}>Unigram Insiders Group</a> and 
                let us know on what you will be working on.
              </p>
              <h3> I'm not a developer, can I help?</h3>
              <hr/>
              <p>
                Yes, join our <a href={Const.insidersGroupLink}>Unigram Insiders Group</a> and 
                let us know about your ideas and bugs you found. 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FaqPage;