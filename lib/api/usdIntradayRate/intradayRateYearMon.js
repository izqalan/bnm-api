var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/usd-interbank-intraday-rate';

/**
 * @function intradayRateYearMonth - USD/MYR interbank intraday highest and lowest rate. Rates are obtained from the best U.S. dollar against Malaysian ringgit interbank highest and lowest dealt rates by commercial banks on the specific date.
 * @param {number} year - Year in numeric 4-digits format
 * @param {number} month - Month in numeric format
 */
function intradayRateYearMonth(year, month) {
    var path = URL + '/year/' + year + '/month/' + month;
    return handler(path);
}
module.exports = intradayRateYearMonth;
