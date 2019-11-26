const http = require('../modules/http');

module.exports = {
	canHandle(handlerInput) {
		return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
				handlerInput.requestEnvelope.request.intent.name === 'UpdateEntityPropIntent';
	},
	async handle(handlerInput) {
		const responseBuilder = handlerInput.responseBuilder;
		const intentSlots = handlerInput.requestEnvelope.request.intent.slots;

		let entity = intentSlots.entity.value;
		let entityID = intentSlots.entityID.value;
		let propName = intentSlots.propName.value;
		let newValue = intentSlots.newValue.value

		let requestedEntity = await http('put', 'https://mohammedrestapi.azurewebsites.net/api/alexa', `info/entity=${entity}&entityID=${entityID}&paramName=${paramName}&newValue=${newValue}`)
		let speechText = `here's the ${propName} for that ${entity} ${entityID} is ${requestedEntity[propName]}`

		return responseBuilder
				.speak(speechText)
				.getResponse();
	}
}