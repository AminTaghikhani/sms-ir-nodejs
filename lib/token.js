const axios = require('axios');

class Token {

    async get(apiKey, secretKey) {
        const result = await axios.post('http://RestfulSms.com/api/Token', {
            UserApiKey: apiKey,
            SecretKey: secretKey
        }).then(e => {
            if(e.data.IsSuccessful)
                return e.data.TokenKey;
            return null;
        }).catch(e => {
            throw new Error(e)
        })
        return result;
    }
}

module.exports = Token;