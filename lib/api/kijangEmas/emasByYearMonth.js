var handler = require('../handler')

const URL = 'https://api.bnm.gov.my/public/kijang-emas'

function emasByYearMonth(year, month){
    var path = URL+'year/'+year+'/month/'+month;
    return handler(path);
}

module.exports = emasByYearMonth;