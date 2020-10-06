var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/exchange-rate/';

/**
 * @function xchgRateByDate - Currency exchange rates from the Interbank Foreign Exchange Market in Kuala Lumpur. The price of selected countries currency in relation to Ringgit.
 * @param {string} currency_code - 3-characters currency code based on ISO4217 standard
 * @param {string} date - Date with format as defined by RFC 3339, section 5.6
 */
function xchgRateByDate(currency_code, date) {
    var path = URL + currency_code + '/date/' + date;

    return handler(path);
}

module.exports = xchgRateByDate;
