var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interbank-swap/';

/**
 * @function itbSwapYearMonth - Daily interbank swap volume by tenure.
 * @param {number} year - Year in numeric 4-digits format
 * @param {number} month - Month in numeric format
 */
function itbSwapYearMonth(year, month) {
    var path = URL + 'year/' + year + '/month/' + month;

    return handler(path);
}

module.exports = itbSwapYearMonth;
