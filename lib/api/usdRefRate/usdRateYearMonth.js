var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/kl-usd-reference-rate';

/**
 * @function usdRateYearMonth
 * @param {number} year - Year in numeric 4-digits format
 * @param {number} month - Month in numeric format
 */
function usdRateYearMonth(year, month){
    var path = URL+'/year/'+year+'/month/'+month;
    return handler(path);
}


module.exports = usdRateYearMonth;
