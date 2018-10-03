const axios = require('axios');

class VerificationCode {

    async send(token,phoneNumber, code) {
        return axios.post('http://RestfulSms.com/api/VerificationCode', {
            Code: code,
            MobileNumber: phoneNumber
        },{
            headers:{
                'x-sms-ir-secure-token': token
            }
        }).then(e => {
            if(e.data.IsSuccessful)
                return e.data.TokenKey;
            return null;
        }).catch(e => {
            throw new Error(e)
        })
    }
}

module.exports = VerificationCode;