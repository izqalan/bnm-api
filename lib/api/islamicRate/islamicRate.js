var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/islamic-interbank-rate';

/**
 * @function islamicRate
 */
function islamicRate(){
    return handler(URL);
}

module.exports = islamicRate;
