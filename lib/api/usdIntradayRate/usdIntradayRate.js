var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/usd-interbank-intraday-rate';

function intradayRate(date = ''){

    if(date){
        var path = URL+'/date/'+date;
        return handler(path);
    }
    return handler(URL);

}


module.exports = intradayRate;
