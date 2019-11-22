module.exports = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      return request.type === 'IntentRequest' &&
        request.intent.name === 'GetElementInfoIntent' &&
        request.dialogState !== 'COMPLETED';
    },
    handle(handlerInput) {
      const currentIntent = handlerInput.requestEnvelope.request.intent;
      return handlerInput.responseBuilder
        .addDelegateDirective(currentIntent)
        .getResponse();
    },
};