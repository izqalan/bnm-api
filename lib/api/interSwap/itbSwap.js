var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interbank-swap/';

/**
 * @function itbSwap
 */
function itbSwap(){
    return handler(URL);
}

module.exports = itbSwap;
