var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-volume/';

/**
 * @function interestVolYearMonth - Daily interbank money market rates and volumes of transactions according to tenure. (2015 - present)
 * @param {number} year - Year in numeric 4-digits format
 * @param {number} month - Month in numeric format
 */
function interestVolYearMonth(year, month){
    var path = URL+'year/'+year+'/month/'+month;
    return handler(path);
}

module.exports = interestVolYearMonth;
