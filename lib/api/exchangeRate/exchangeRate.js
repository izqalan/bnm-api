var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/exchange-rate/'

function exchangeRate(){

    return handler(URL);

}

module.exports = exchangeRate;