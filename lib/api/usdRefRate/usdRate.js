var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/kl-usd-reference-rate';

/**
 * @function usdRate
 * @param {string} date - Date with format as defined by RFC 3339, section 5.6
 */
function usdRate(date = ''){

    if(date){
        var path = URL+'/date/'+date;
        return handler(path);
    }
    return handler(URL);

}


module.exports = usdRate;
