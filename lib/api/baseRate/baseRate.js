const handler = require('../handler');
const apiHandler = require('../apiHandler');
// import ApiHandler from '../apiHandler'


function baseRate(bankCode = ''){

    const URL = 'https://api.bnm.gov.my/public/base-rate/'+bankCode;
    return apiHandler(URL)
   
}

module.exports = baseRate;
