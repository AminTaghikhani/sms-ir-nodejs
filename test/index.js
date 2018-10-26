const Token = require('../lib/token')
const VerificationCode = require('../lib/verificationCode')
const Message = require('../lib/message')
const token = new Token();
const verificationCode = new VerificationCode();
const msg = new Message();
const APIKEY = '';
const SECRET = '';
const PHONENUMBER = '';
const LINENUMBER = ''

async function tokenTest() {
    const result = await token.get(APIKEY, SECRET)
    console.log(result)
}
async function verificationTest() {
    const tkn = await token.get(APIKEY, SECRET)
    const result = await verificationCode.send(tkn, PHONENUMBER, 12345)
    console.log(result)
}
async function messageTest() {
    const tkn = await token.get(APIKEY, SECRET)
    const result = await msg.send(tkn, [PHONENUMBER], ['message'], LINENUMBER)
    console.log(result)
}