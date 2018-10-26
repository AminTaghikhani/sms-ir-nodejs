const axios = require('axios');

class Message {

    async send(token, phoneNumbers, body,LineNumber) {
        const result = await axios.post('http://RestfulSms.com/api/MessageSend', {
            Messages: body,
            MobileNumbers: phoneNumbers,
            SendDateTime: null,
            CanContinueInCaseOfError: true,
            LineNumber,
        }, {
            headers: {
                'x-sms-ir-secure-token': token
            }
        }).then(e => {
            if (e.data.IsSuccessful)
                return e.data;
            return null;
        }).catch(e => {
            throw new Error(e)
            return null;
        })
        return result;
    }
}

module.exports = Message;