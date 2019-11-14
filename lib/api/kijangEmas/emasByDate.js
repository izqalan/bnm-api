var handler = require('../handler')

const URL = 'https://api.bnm.gov.my/public/kijang-emas/'

function emasByDate(date){
    var path = URL+'date/'+date;
    return handler(path);
}

module.exports = emasByDate;