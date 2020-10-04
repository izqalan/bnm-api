var handler = require('../handler')

const URL = 'https://api.bnm.gov.my/public/kijang-emas/'

/**
 * @function emasByDate
 * @param {string} date - Date with format as defined by RFC 3339, section 5.6
 */
function emasByDate(date){
    var path = URL+'date/'+date;
    return handler(path);
}

module.exports = emasByDate;