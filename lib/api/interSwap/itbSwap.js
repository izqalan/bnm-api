var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interbank-swap/';

/**
 * @function itbSwap - Daily interbank swap volume by tenure.
 */
function itbSwap(){
    return handler(URL);
}

module.exports = itbSwap;
