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
    let entity = intentSlots.entity.value;
    let entityID = intentSlots.entityID.value;
    let isSendMessage = isYes(intentSlots.isSendMessage.value);
    let employee = null;
    let intervention = null;
    let speechText = 'something went wrong, please try again !'

    employee = await http('get', 'https://mohammedrestapi.azurewebsites.net/api/employees', employeeId)

    intervention = await http("post", `https://mohammedrestapi.azurewebsites.net/api/interventions`, `element=${entity}&elementId=${entityID}&employeeId=${employeeId}`)

    if (employee != null && intervention != null) {
      speechText = `Thank you! I just created an intervention on ${entity} ${entityID} with ${employee.firstName} ${employee.lastName}`;
    }

    if (isSendMessage && intervention != null) {
      let techMessage = `A new intervention on ${entity} $$ was created, you're the tech assigned to it`;
      speechText = `Thank you! I just created an intervention on ${entity} ${entityID} and sent a text message to ${employee.firstName} ${employee.lastName}`;
      await sendMessage(techMessage, "+14182654300")
    }

    return responseBuilder
      .speak(speechText)
      .getResponse();
  }
};