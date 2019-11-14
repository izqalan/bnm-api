var handler = require('../handler')

const URL = 'https://api.bnm.gov.my/public/kijang-emas'

function emas(){
    return handler(URL);
}

module.exports = emas;