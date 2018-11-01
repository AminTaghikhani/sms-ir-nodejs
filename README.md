# sms-ir-nodejs [![Build Status](https://travis-ci.org/AminTaghikhani/sms-ir-nodejs.svg?branch=master)](https://travis-ci.org/AminTaghikhani/sms-ir-nodejs)
SMS.ir sms provider nodejs module

## Install

```bash
# with npm
$ npm install --save sms-ir
```

## Usage
As early as possible in your application.

### APIKEY and SECRETKEY
first of all you should get `api key` and `secret key` from sms.ir.

### Token
then you should get token with this code

- `APIKEY` your apiKey
- `SECRETKEY` your secretKey

```javascript
const {Token} = require('sms-ir')
const token = new Token();

const result = await token.get(APIKEY, SECRETKEY) // don't forget to write await
```
now you can use sms.ir api

### Verification Code
now with token you can send verification code

- `tokenResult` token get with Token class
- `PHONENUMBER` is user phonenumber
- `CODE` generated code

```javascript
const {Token,VerificationCode} = require('sms-ir')
const token = new Token();
const verificationCode = new VerificationCode();

// your code

// when you need to use
const tokenResult = await token.get(APIKEY, SECRETKEY) // don't forget to write await
const verificationResult = await verificationCode.send(tokenResult, PHONENUMBER, CODE) // don't forget to write await
```

#### example

```javascript
const {Token,VerificationCode} = require('sms-ir')
const token = new Token();
const verificationCode = new VerificationCode();

// your code

// when you need to use
const tokenResult = await token.get(APIKEY, SECRETKEY) // don't forget to write await
const verificationResult = await verificationCode.send(tokenResult, '09xxxxxxxxx', 12345) // don't forget to write await
```

### Default Message

now with token you can send Message

- `tokenResult` token get with Token class
- `PHONENUMBER` array of user phone numbers only array you must send as parameter
- `MESSAGE` array of message you should send as parameter
- `LINENUMBER` your line number for sending 

```javascript
const {Token,Message} = require('sms-ir')
const token = new Token();
const message = new Message();

// your code

// when you need to use
const tokenResult = await token.get(APIKEY, SECRETKEY) // don't forget to write await
const messageResult = await message.send(tokenResult, PHONENUMBER, MESSAGE, LINENUMBER) // don't forget to write await
```

#### example

```javascript
const {Token,Message} = require('sms-ir')
const token = new Token();
const message = new Message();

// your code

// when you need to use
const tokenResult = await token.get(APIKEY, SECRETKEY) // don't forget to write await
const messageResult = await message.send(tokenResult, ['09xxxxxxxxx'], ['message'], 'xxxxxxxxxxxxx') // don't forget to write await
```