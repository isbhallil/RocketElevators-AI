const isYes = require('../modules/isYes')
const sendMessage = require('../modules/sendMessage')
const http = require('../modules/http')

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'CreateInterventionIntent';
  },
  async handle(handlerInput) {
    const responseBuilder = handlerInput.responseBuilder;
    const intentSlots = handlerInput.requestEnvelope.request.intent.slots;
    let employeeId = intentSlots.employeeId.value;
    let element = intentSlots.element.value;
    let elementId = intentSlots.elementId.value;
    let isSendMessage = isYes(intentSlots.isSendMessage.value);
    let employee = '';

    await http('get', 'https://mohammedrestapi.azurewebsites.net/api/employees', employeeId)
    .then(data => employee = data)
    .catch(error => console.log(error))

    let speechText = `Thank you! I just created an intervention on ${element} ${elementId} with ${employee.firstName} ${employee.lastName}`;

    if (isSendMessage) {
      let techMessage = `A new intervention on ${element} ${elementId} was created, you're the tech assigned to it`;
      speechText = `Thank you! I just created an intervention on ${element} ${elementId} and sent a text message to ${employee.firstName} ${employee.lastName}`;
      await sendMessage(techMessage, "+14182654300")
    }

    return responseBuilder
      .speak(speechText)
      .getResponse();
  },
};