const client = require('twilio')("AC29f00d350501a2be0b9532c3dcce09f8", "07836e0e1f8f31caee608542cdd6c395");

module.exports = async (message, to) => {
    await client.messages.create({
        body: message,
        from: "+15035361200",
        to: to
    })
}