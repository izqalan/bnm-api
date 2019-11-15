var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/renminbi-fx-forward-price';

function renminbiForwardPrice(){
    return handler(URL);
}

module.exports = renminbiForwardPrice;