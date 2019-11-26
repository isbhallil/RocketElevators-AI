const http = require('../modules/http');

module.exports = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'GetSummaryIntent';
    },
    async handle(handlerInput) {
        summary = await http('get', 'api/alexa/summary', '')

        let speechText = `Greetings
            There are currently ${summary.elevatorsCount} elevators deployed in the ${summary.buildingsCount} buildings of your ${summary.customerCount} customers
            Currently, ${summary.notRunningElevatorsCount} elevators are not in Running Status and are being serviced
            ${summary.batteriesCount} Batteries are deployed across ${summary.citiesCount} cities
            On another note you currently have ${summary.quotesAwaitingProccessing} quotes awaiting processing
            You also have ${summary.leadsInContactRequests} leads in your contact requests
        `

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};