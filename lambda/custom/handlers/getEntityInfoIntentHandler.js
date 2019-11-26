const http = require('../modules/http');
const slotId = require('../modules/getSlotId');

module.exports = {
	canHandle(handlerInput) {
		return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
				handlerInput.requestEnvelope.request.intent.name === 'GetElementInfoIntent';
	},
	async handle(handlerInput) {
		const responseBuilder = handlerInput.responseBuilder;
		const intentSlots = handlerInput.requestEnvelope.request.intent.slots;

		let entity = intentSlots.entity.value;
		let entityID = intentSlots.entityID.value;
		let propName = slotId(intentSlots.propName);

		let requestedEntity = await http('get', 'api/alexa/info', `entity=${entity}&entityID=${entityID}`)
		let speechText = `the ${propName} for ${entity} ${entityID} is ${requestedEntity[propName]}`

		return responseBuilder
				.speak(speechText)
				.getResponse();
	}
}