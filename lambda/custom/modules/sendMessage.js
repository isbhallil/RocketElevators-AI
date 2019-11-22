const client = require('twilio')("AC221e628d23f16051361563539e040a4b", "e34f37f152128864a8d239e6817d25c3");

module.exports = async (message, to) => {
    return await client.messages.create({
        body: message,
        from: "+18722411501",
        to: to
    })
}