// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
//const {Card, Suggestion} = require('dialogflow-fulfillment');
const DialogFlowApp = require('actions-on-google').DialogFlowApp;
const https = require ('https');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  console.log('Inside Main function.....yessssssss');
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  let action = request.body.queryResult.action;
  console.log('Action object: ' + JSON.stringify(action));

  if (action == 'input.getSchoolStaffInfo'){
    console.log('Inside input function');
    const parameters = request.body.queryResult.parameters;
	console.log('Action parameters: ' + JSON.stringify(parameters));

	var municipalDivision = parameters['MunicipalDivision'];
	var schoolObject = parameters.SchoolObject;
    var queryAction = parameters.QueryAction;
    console.log('Action MunicipalDivision parameter: ' + JSON.stringify(municipalDivision));
    console.log('Action SchoolObject parameter: ' + JSON.stringify(schoolObject));
    console.log('Action QueryAction parameter: ' + JSON.stringify(queryAction));
  	response.send(buildChatResponse(`I'm sorry, I haven't coded to this question yet`));
    return;
  }
  
  getContacts(response); // test contacts rest-api
});

function getContacts(cloudResponse) {
  var hostString = "staging.cssd.ab.ca";
  var pathString = "/ContactManager/api/";
  var request = https.get({
    host: hostString,
    path: pathString + "Contacts"
  }, function (response) {
    var json = "";
    response.on('data', function(chunk) {
      console.log("received JSON response: " + chunk);
      json += chunk;
    });
    response.on('end', function(){
      var reply = 'Your contacts are:';
      var jsonData = JSON.parse(json);
      jsonData.forEach(function(item)
      {
        console.log ('Id: ' + item.Id + ', Name: ' + item.Name);
        reply += '\r\n' + `Id: ${item.Id}, Name: ${item.Name}`;
      });
      reply += '\r\n You have ' + jsonData.length + ' contacts in total';
      cloudResponse.send(buildChatResponse(reply));
      console.log ("the number of contacts are:" + jsonData.length);
    });
  });
}

function buildChatResponse(chat) {
	return JSON.stringify({"fulfillmentText": chat});
}
