/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Features page. It showcases the various features provided
 * by the app.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React from 'react';
import Feature from './components/Feature'
import './FeaturesPage.css';

const FeaturesPage = () => (
  <div className="featurepage-root">
    <Feature title="Calls" descr="With HD calls, voices sound clearer and closer. And with video calls, you can have face-to-face conversations with friends and family wherever they are." horizontal={true} pic="img/devices/dummy.png"/>
    <Feature title="Share Media" descr="With a built-in camera, Messenger lets you snap and shoot moments as they happen. You can even add drawings or text to personalize your photos." horizontal={false} pic="img/devices/dummy.png"/>
    <Feature title="GIFs & Stickers" descr="Send delightful, silly, cute, weird and expressive stickers to say just about anything. Search for stickers to match your mood or explore categories like Happy and In Love." horizontal={true} pic="img/devices/dummy.png"/>
  </div>
);

export default FeaturesPage;