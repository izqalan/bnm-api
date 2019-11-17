var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/exchange-rate/'

function exchangeRate(currency = ''){
    let path = URL+currency;
    return handler(path);

}

module.exports = exchangeRate;