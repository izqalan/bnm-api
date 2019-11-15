var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/kl-usd-reference-rate';

function usdRateYearMonth(year, month){
    var path = URL+'/year/'+year+'/month/'+month;
    return handler(path);
}


module.exports = usdRateYearMonth;
