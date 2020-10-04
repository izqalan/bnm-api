var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-rate';

/**
 * @function interestRate
 */
function interestRate(){

    return handler(URL);

}

module.exports = interestRate;