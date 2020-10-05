var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/islamic-interbank-rate';

/**
 * @function islamicRate - Daily weighted average of Islamic interbank deposit rates for various tenures. (Jan 2015-present)
 */
function islamicRate(){
    return handler(URL);
}

module.exports = islamicRate;
