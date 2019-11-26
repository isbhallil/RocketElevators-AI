const http = require('../modules/http');

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
		let propName = intentSlots.propName.value;

		let requestedEntity = await http('get', 'https://mohammedrestapi.azurewebsites.net/api/alexa', `info/entity=${entity}&entityID=${entityID}`)
		let speechText = `the ${propName} for ${entity} ${entityID} is ${requestedEntity[propName]}`

		return responseBuilder
				.speak(speechText)
				.getResponse();
	}
}