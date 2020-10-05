var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/exchange-rate/'

/**
 * @function xchgByYearMonth - Currency exchange rates from the Interbank Foreign Exchange Market in Kuala Lumpur. The price of selected countries currency in relation to Ringgit.
 * @param {string} currency_code - 3-characters currency code based on ISO4217 standard
 * @param {number} year - Year in numeric 4-digits format
 * @param {number} month - Month in numeric format
 */
function xchgByYearMonth(currency_code, year, month){

    var path = URL+currency_code+'/year/'+year+'/month/'+month;

    return handler(path);

}

module.exports = xchgByYearMonth;