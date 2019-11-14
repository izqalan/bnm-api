var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/exchange-rate/'

function xchgByYearMonth(currency_code, year, month){

    var path = URL+currency_code+'/year/'+year+'/month/'+month;

    return handler(path);

}

module.exports = xchgByYearMonth;