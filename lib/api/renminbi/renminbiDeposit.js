var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/renminbi-deposit-acceptance-rate';

/**
 * @function renminbiDeposit
 */
function renminbiDeposit(){
    return handler(URL);
}

module.exports = renminbiDeposit;
