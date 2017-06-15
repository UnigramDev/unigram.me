import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Footer from './Footer';
import Navigation from './Navigation';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Navigation />, document.getElementById('navigation'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
