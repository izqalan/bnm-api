var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/kl-usd-reference-rate';

/**
 * @function usdRate - A reference rate that is computed based on weighted average volume of the interbank USD/MYR FX spot rate transacted by the domestic financial institutions and published daily at 3:30 p.m.
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
