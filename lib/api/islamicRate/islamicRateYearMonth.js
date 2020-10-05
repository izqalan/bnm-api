var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/islamic-interbank-rate/';

/**
 * @function islamicRateYearMonth - Daily weighted average of Islamic interbank deposit rates for various tenures. (Jan 2015-present)
 * @param {number} year - Year in numeric 4-digits format
 * @param {number} month - Month in numeric format
 */
function islamicRateYearMonth(year, month){
    var path = URL+'year/'+year+'/month/'+month;
    return handler(path);
}

module.exports = islamicRateYearMonth;
