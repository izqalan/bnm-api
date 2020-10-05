var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/opr';

/**
 * @function opr - Overnight Policy Rate (OPR) decided by the Monetary Policy Committee.
 * @param {number} year - Year in numeric 4-digits format
 */
function opr(year = ''){

    if(year){
        var path = URL+'/year/'+year;
        return handler(path);
    }
    return handler(URL);

}

module.exports = opr;