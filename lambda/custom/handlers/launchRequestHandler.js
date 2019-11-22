const Alexa = require('ask-sdk');
module.exports = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    async handle(handlerInput) {

      const responseBuilder = handlerInput.responseBuilder;

      let speechText = 'Hello their, you can say create intervention or send message to employee to see Rocket AI in action.';
      let repromptText = 'Hi ! say a command to see Rocket Ai in action.';

      return responseBuilder
        .speak(speechText)
        .reprompt(repromptText)
        .getResponse();
    },
};