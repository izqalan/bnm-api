var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-rate/';

/**
 * @function interestRateYearMonth
 * @param {number} year - Year in numeric 4-digits form
 * @param {number} month - Month in numeric format
 */
function interestRateYearMonth(year, month){
    var path = URL+'year/'+year+'/month/'+month;
    return handler(path);
}

module.exports = interestRateYearMonth;