import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import FeatureDigest from './FeatureDigest';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Navigation />, document.getElementById('navigation'));
ReactDOM.render(<FeatureDigest />, document.getElementById('features'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
