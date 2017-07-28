/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @class Creates a new Feature with all the basic info.
 * @see {@link Feature.js|Feature}
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
class FeatureData {

    constructor(id, title, descr, horizontal, pic) {
        this.id = id;
        this.title = title; 
        this.descr = descr;
        this.horizontal = horizontal;
        this.pic = pic;
    }
}

export default FeatureData;