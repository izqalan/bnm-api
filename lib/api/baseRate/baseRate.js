const handler = require('../handler');
const ApiHandler = require('../apiHandler');
// import ApiHandler from '../apiHandler'


function baseRate(bankCode = ''){

    const URL = 'https://api.bnm.gov.my/public/base-rate/'+bankCode;
    
    let apiHandler = new ApiHandler(URL)
    
    console.log('base rate: '+apiHandler.getResponse());
    return apiHandler.getResponse();
   
}

module.exports = baseRate;
