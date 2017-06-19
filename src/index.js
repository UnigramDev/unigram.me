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
import Navigation from './Navigation';
import Hero from './Hero';
import AboutDigest from './AboutDigest';
import FeatureDigest from './FeatureDigest';
import SupportDigest from './SupportDigest';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/* Render in top-bottom order all components. */
ReactDOM.render(<Navigation />, document.getElementById('navigation'));
ReactDOM.render(<Hero />, document.getElementById('hero'));
ReactDOM.render(<AboutDigest />, document.getElementById('about'));
ReactDOM.render(<FeatureDigest />, document.getElementById('features'));
ReactDOM.render(<SupportDigest />, document.getElementById('support'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

/* Register service worker. */
registerServiceWorker();
