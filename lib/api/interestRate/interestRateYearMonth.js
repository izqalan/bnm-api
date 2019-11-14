var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-rate/';

function interestRateYearMonth(year, month){
    var path = URL+'year/'+year+'/month/'+month;
    return handler(path);
}

module.exports = interestRateYearMonth;