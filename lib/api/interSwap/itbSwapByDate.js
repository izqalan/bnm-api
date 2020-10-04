var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interbank-swap/';

// date format
// yyyyy-mm-dd
/**
 * @function itbSwapByDate
 * @param {string} date - Date with format as defined by RFC 3339, section 5.6
 */
function itbSwapByDate(date){

    var path = URL+'date/'+date;
    return handler(path);

}

module.exports = itbSwapByDate;