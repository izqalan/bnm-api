// turn over default

var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/fx-turn-over/'
// turn over by month and year
/**
 * @function fxTurnOverByYearMonth - Daily foreign exchange turnover for all currencies including interbank and customer deals.
 * @param {number} year - Year in numeric 4-digits format
 * @param {number} month - Month in numeric format
 */
function fxTurnOverByYearMonth(year, month){

    var path = URL+'year/'+year+'/month/'+month;
    // console.log('3: '+path);

    return handler(path);

}

module.exports = fxTurnOverByYearMonth;