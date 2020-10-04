var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-volume/';

/**
 * @function interestVolYearMonth
 * @param {number} year - Year in numeric 4-digits format
 * @param {number} month - Month in numeric format
 */
function interestVolYearMonth(year, month){
    var path = URL+'year/'+year+'/month/'+month;
    return handler(path);
}

module.exports = interestVolYearMonth;
