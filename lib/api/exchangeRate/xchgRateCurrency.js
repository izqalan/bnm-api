var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/exchange-rate/'

function xchgRateCurrency(currency_code){

    var path = URL+currency_code;

    return handler(path);

}

module.exports = xchgRateCurrency;