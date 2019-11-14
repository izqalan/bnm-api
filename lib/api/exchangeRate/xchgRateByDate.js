var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/exchange-rate/'

function xchgRateByDate(currency_code, date){

    var path = URL+currency_code+'/date/'+date;

    return handler(path);
}

module.exports = xchgRateByDate;