var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/exchange-rate/';

/**
 * @function xchgRate - Currency exchange rates from the Interbank Foreign Exchange Market in Kuala Lumpur. The price of selected countries currency in relation to Ringgit.
 * @param {string} currency_code - 3-characters currency code based on ISO4217 standard
 */
function xchgRate(currency_code = '') {
    let path = URL + currency_code;

    return handler(path);
}

module.exports = xchgRate;
