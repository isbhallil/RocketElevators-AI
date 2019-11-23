const client = require('twilio')(process.env.twilioAccountSid, process.env.twilioAuthToken);

module.exports = async (message, to) => {
    return await client.messages.create({
        body: message,
        from: "+18722411501",
        to: to
    })
}