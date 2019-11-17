var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/exchange-rate/'

function xchgRate(currency_code = ''){

    let path = URL+currency_code;

    return handler(path);

}

module.exports = xchgRate;