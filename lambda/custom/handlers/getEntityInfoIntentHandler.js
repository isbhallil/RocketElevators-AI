module.exports = {
	canHandle(handlerInput) {
		return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
				handlerInput.requestEnvelope.request.intent.name === 'GetElementInfoIntent';
	},
	async handle(handlerInput) {
			let speechText = "test is working fine !"

			return handlerInput.responseBuilder
					.speak(speechText)
					.getResponse();
	}
}