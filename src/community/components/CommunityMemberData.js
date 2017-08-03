/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @class Represents a CommunityMember with all the basic info.
 * 
 * @memberof CommunityPageSpace
 * @see {@link community/components/CommunityMember.js|CommunityMember}
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
class CommunityMemberData {
  constructor(id, name, role, picture) {
    this.id = id
    this.name = name
    this.role = role
    this.picture = picture
  }
}

export default CommunityMemberData