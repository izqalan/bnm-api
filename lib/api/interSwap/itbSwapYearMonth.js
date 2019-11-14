var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interbank-swap/';

function itbSwapYearMonth(year, month){

    var path = URL+'year/'+year+'/month/'+month;

    return handler(path);

}

module.exports = itbSwapYearMonth;