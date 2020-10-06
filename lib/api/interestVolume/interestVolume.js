var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-volume/';

/**
 * @function interestVolume - Daily interbank money market rates and volumes of transactions according to tenure. (2015 - present)
 */
function interestVolume() {
    return handler(URL);
}

module.exports = interestVolume;
