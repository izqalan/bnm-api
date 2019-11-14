var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/islamic-interbank-rate/';

function islamicRateDate(date){
    var path = URL+'date/'+date;
    return handler(path);
}

module.exports = islamicRateDate;
