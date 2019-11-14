var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/consumer-alert/'

function consumerAlert(company = ''){

    var path = URL+company;
    
    return handler(path);

}

module.exports = consumerAlert;

