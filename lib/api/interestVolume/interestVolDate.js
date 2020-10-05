var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-volume/';

/**
 * @function interestVolDate - Daily interbank money market rates and volumes of transactions according to tenure. (2015 - present)
 * @param {string} date - Date with format as defined by RFC 3339, section 5.6
 */
function interestVolDate(date){
    var path = URL+'date/'+date;
    return handler(path);
}

module.exports = interestVolDate;
