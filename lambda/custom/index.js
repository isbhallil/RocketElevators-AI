/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');

const LaunchRequestHandler = require('./handlers/launchRequestHandler');
const InProgressCreateInterventionHandler = require('./handlers/inProgressCreateInterventionHandler');
const CreateInterventionHandler = require('./handlers/createInterventionHandler');
const HelpIntentHandler = require('./handlers/helpIntentHandler');
const CancelAndStopIntentHandler = require('./handlers/cancelAndStopIntentHandler');
const SessionEndedRequestHandler = require('./handlers/sessionEndedRequestHandler');
const ErrorHandler = require('./handlers/errorHandler');

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    InProgressCreateInterventionHandler,
    CreateInterventionHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();