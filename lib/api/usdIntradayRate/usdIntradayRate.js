var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/usd-interbank-intraday-rate';

/**
 * @function intradayRate - USD/MYR interbank intraday highest and lowest rate. Rates are obtained from the best U.S. dollar against Malaysian ringgit interbank highest and lowest dealt rates by commercial banks on the specific date.
 * @param {string} date - Date with format as defined by RFC 3339, section 5.6
 */
function intradayRate(date = '') {
    if (date) {
        var path = URL + '/date/' + date;
        return handler(path);
    }
    return handler(URL);
}

module.exports = intradayRate;
