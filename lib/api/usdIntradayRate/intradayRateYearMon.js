var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/usd-interbank-intraday-rate';

/**
 * @function intradayRateYearMonth
 * @param {number} year - Year in numeric 4-digits format
 * @param {number} month - Month in numeric format
 */
function intradayRateYearMonth(year, month){

    var path = URL+'/year/'+year+'/month/'+month;
    return handler(path);

}
module.exports = intradayRateYearMonth;
