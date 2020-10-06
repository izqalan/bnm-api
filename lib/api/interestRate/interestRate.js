var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-rate';

/**
 * @function interestRate - Daily interbank money market rates and volumes of transactions according to tenure. (2015 - present)
 */
function interestRate() {
    return handler(URL);
}

module.exports = interestRate;
