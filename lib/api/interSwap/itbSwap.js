
var handler = require('../handler');

function itbSwap(){

    const URL = 'https://api.bnm.gov.my/public/interbank-swap/';

    return Promise.resolve( handler(URL));

}

module.exports = itbSwap;