var fetch = require('node-fetch');

/**
 * @function handler
 * @param {string} url - URL to fetch
 */
function handler(url) {
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.BNM.API.v1+json',
        },
    };

    return fetch(url, options)
        .then((res) => res.json())
        .then(
            (json) => {
                return json;
            },
            (err) => {
                if (err.name === 'AbortError') {
                    console.log(err.name);
                    return err.name;
                }
            }
        );
}

module.exports = handler;
