const isYes = require('../modules/isYes')
const getElementInfo = require('../modules/getElementInfo')
const http = require('../modules/http')

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'GetElementInfoIntent';
  },
  async handle(handlerInput) {
    const responseBuilder = handlerInput.responseBuilder;
    const intentSlots = handlerInput.requestEnvelope.request.intent.slots;
    
    let element = intentSlots.element.value;
    let elementId = intentSlots.elementId.value;
    let property = intentSlots.property.value

    let info = await getElementInfo(element, elementId, property)

    let speechText = `the ${property} of ${element} ${elementId} is ${info}`;

    return responseBuilder
      .speak(speechText)
      .getResponse();
  },
};