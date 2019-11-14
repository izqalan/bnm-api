var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-rate/';

function interestRateDate(date){
    var path = URL+'date/'+date
    return handler(path);
}

module.exports = interestRateDate;