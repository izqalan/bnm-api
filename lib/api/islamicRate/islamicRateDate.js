var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/islamic-interbank-rate/';

/**
 * @function islamicRateDate - Daily weighted average of Islamic interbank deposit rates for various tenures. (Jan 2015-present)
 * @param {string} date - Date with format as defined by RFC 3339, section 5.6
 */
function islamicRateDate(date) {
    var path = URL + 'date/' + date;
    return handler(path);
}

module.exports = islamicRateDate;
