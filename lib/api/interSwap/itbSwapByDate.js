var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interbank-swap/';

// date format
// yyyyy-mm-dd

function itbSwapByDate(date){

    var path = URL+'date/'+date;
    return handler(path);

}

module.exports = itbSwapByDate;