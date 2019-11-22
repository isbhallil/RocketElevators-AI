const axios = require('axios');

module.exports = (method, url, args) => {
    return new Promise((resolve, reject) => {
        header = {
        method: method,
        url: `${url}/${args}`,
        responseType: 'json'
        }

        axios(header)
        .then(function (response) {
            return resolve(response.data)
        })
        .catch(error => reject(error))
    });
}