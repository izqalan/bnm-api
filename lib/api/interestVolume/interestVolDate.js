var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-volume/';

function interestVolDate(date){
    var path = URL+'date/'+date;
    return handler(path);
}

module.exports = interestVolDate;
