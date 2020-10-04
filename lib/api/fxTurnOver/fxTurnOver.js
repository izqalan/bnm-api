var handler = require('../handler');

// turn over default
const URL = 'https://api.bnm.gov.my/public/fx-turn-over/'

/**
 * @function fxTurnOver
 */
function fxTurnOver(){

    // console.log('1: '+URL);
    return handler(URL);

}
// console.log(fxTurnOver());

module.exports = fxTurnOver;

