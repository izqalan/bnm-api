var handler = require('../handler');

async function baseRate(bankCode = ''){

    const URL = 'https://api.bnm.gov.my/public/base-rate/'+bankCode;

    return handler(URL);
   
}

module.exports = baseRate;
