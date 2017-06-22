/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Home page of the site. It renders all the components, from navigation to footer.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './common/components/Navigation';
import Footer from './common/components/Footer';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

/* Render in top-bottom order all components. */
ReactDOM.render(
  <Router>
    <div>
      <Navigation/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/privacy" component={PrivacyPage}/>
      <Footer/>
    </div>
  </Router>, document.body
);
/* Register service worker. */
registerServiceWorker();
