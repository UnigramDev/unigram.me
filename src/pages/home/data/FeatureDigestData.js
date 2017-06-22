/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @class Creates a new Feature digest with all the basic info.
 * @see {@link FeatureDigestItem.js|FeatureDigestItem}
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
class FeatureDigestData {

    constructor(id, title, descr, link) {
        this.id = id;
        this.title = title; 
        this.descr = descr;
        this.link = link;
    }
}

export default FeatureDigestData;