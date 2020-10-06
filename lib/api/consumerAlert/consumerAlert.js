var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/consumer-alert/';

/**
 * @function consumerAlert - A list of known companies and websites which are neither authorised nor approved under the relevant laws and regulations administered by BNM. (Based on information received by BNM).
 * @param {string} company - Company to search
 */
function consumerAlert(company = '') {
    var path = URL + company;

    return handler(path);
}

module.exports = consumerAlert;
