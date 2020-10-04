var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/consumer-alert/'

/**
 * @function consumerAlert
 * @param {string} company - Company to search
 */
function consumerAlert(company = ''){

    var path = URL+company;
    
    return handler(path);

}

module.exports = consumerAlert;

