var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/usd-interbank-intraday-rate';


function intradayRateYearMonth(year, month){

    var path = URL+'/year/'+year+'/month/'+month;
    return handler(path);

}
module.exports = intradayRateYearMonth;
