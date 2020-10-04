var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/usd-interbank-intraday-rate';

/**
 * @function intradayRate
 * @param {string} date - Date with format as defined by RFC 3339, section 5.6
 */
function intradayRate(date = ''){

    if(date){
        var path = URL+'/date/'+date;
        return handler(path);
    }
    return handler(URL);

}


module.exports = intradayRate;
