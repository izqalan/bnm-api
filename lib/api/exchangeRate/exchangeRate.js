var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/exchange-rate/'

/**
 * @function exchangeRate
 * @param {string} currency - 3-characters currency code based on ISO4217 standard
 */
function exchangeRate(currency = ''){
    let path = URL+currency;
    return handler(path);

}

module.exports = exchangeRate;