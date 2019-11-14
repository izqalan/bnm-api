var handler = require('../handler');
const URL = 'https://api.bnm.gov.my/public/opr';

function opr(year = ''){

    if(year){
        var path = URL+'/year/'+year;
        return handler(path);
    }
    return handler(URL);

}

module.exports = opr;