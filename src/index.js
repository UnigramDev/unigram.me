/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Home page of the site. Using React Router to provide page navigation
 * and meaningful URLs.
 * @see {@link https://github.com/ReactTraining/react-router|React Router}
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css'; 
/* Common components. */
import Navigation from './common/components/Navigation';
import Footer from './common/components/Footer';
import ScrollToTop from './common/components/ScrollToTop';
import NotFound from './common/components/NotFound';
/* Pages. */
import HomePage from './pages/home/HomePage';
import PrivacyPage from './pages/privacy/PrivacyPage';
import SupportPage from './pages/support/SupportPage';
import FaqPage from './pages/faq/FaqPage';
import CommunityPage from './pages/community/CommunityPage';
/* Navigation. */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* All navigation paths. Switch is necessary in order to match one possible
   path and avoid displaying the NotFound page when not intended. */
const NavigationRules = () => (
  <Router>
    <ScrollToTop>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/privacy" component={PrivacyPage}/>
        <Route path="/support" component={SupportPage}/>
        <Route path="/faq" component={FaqPage}/>
        <Route path="/community" component={CommunityPage}/>
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </ScrollToTop>
  </Router>
);

/* Render the navigation rules. */
ReactDOM.render(<NavigationRules/>, document.getElementById('core'));

/* Register service worker. */
registerServiceWorker();
