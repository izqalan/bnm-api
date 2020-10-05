var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-rate/';

/**
 * @function interestRateYearMonth - Daily interbank money market rates and volumes of transactions according to tenure. (2015 - present)
 * @param {number} year - Year in numeric 4-digits form
 * @param {number} month - Month in numeric format
 */
function interestRateYearMonth(year, month){
    var path = URL+'year/'+year+'/month/'+month;
    return handler(path);
}

module.exports = interestRateYearMonth;