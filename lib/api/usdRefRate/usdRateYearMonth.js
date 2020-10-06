var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/kl-usd-reference-rate';

/**
 * @function usdRateYearMonth - A reference rate that is computed based on weighted average volume of the interbank USD/MYR FX spot rate transacted by the domestic financial institutions and published daily at 3:30 p.m.
 * @param {number} year - Year in numeric 4-digits format
 * @param {number} month - Month in numeric format
 */
function usdRateYearMonth(year, month) {
    var path = URL + '/year/' + year + '/month/' + month;
    return handler(path);
}

module.exports = usdRateYearMonth;
