const Token = require('../lib/token')
const VerificationCode = require('../lib/verificationCode')
const token = new Token();
const verificationCode = new VerificationCode();
token.get('APIKEY','SECRETKEY').then((token)=>{
    verificationCode.send(token,'09xxxxxxxxx',12345).then(console.log).catch(console.log)
});