const Token = require('../lib/token')
const VerificationCode = require('../lib/verificationCode')
const Message = require('../lib/message')
const token = new Token();
const msg = new Message();
token.get('42c2abcc65a6b16b33ae9f07', 'AFyNhpg5NQAC8Z8SDwSi').then(async (token)=>{
    const result = await msg.send(token,['09359395520'],["سلام"],"30004747476131")
    console.log(result);
    
});