const client = require('twilio')(process.env['twilioAccountSid'], process.env['twilioAuthToken']);

module.exports = async (message, to) => {
    await client.messages.create({
        body: message,
        from: "+15035361200",
        to: to
    })
}