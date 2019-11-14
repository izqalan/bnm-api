var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/interest-volume/';

function interestVolume(){
    return handler(URL);
}

module.exports = interestVolume;
