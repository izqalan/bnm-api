var handler = require('../handler');

// turn over default
const URL = 'https://api.bnm.gov.my/public/fx-turn-over/';

/**
 * @function fxTurnOver - Daily foreign exchange turnover for all currencies including interbank and customer deals.
 */
function fxTurnOver() {
    // console.log('1: '+URL);
    return handler(URL);
}
// console.log(fxTurnOver());

module.exports = fxTurnOver;
