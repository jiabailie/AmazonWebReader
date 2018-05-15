'use strict';
const Alexa = require('alexa-sdk');
const $ = require('cheerio')
const Request = require('request');

//=============================================================================================================================
//TODO: The items below this comment need your attention.
//=============================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Web Reader';
const HELP_MESSAGE = 'You can say read it, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=============================================================================================================================
//TODO: Replace this data with your own.
//=============================================================================================================================
const webPage = 'http://aka.ms/webreader'

//=============================================================================================================================
//Editing anything below this line might break your skill.
//=============================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('ReadWebPage');
    },
    'ReadWebPage': function () {
        var mythis = this;
        Request(webPage, function (error, response, html) {
            console.log(error);
            console.log(response.statusCode);
            var speechOutput = $.load(html)('body').text()
            mythis.response.cardRenderer(SKILL_NAME, speechOutput);
            mythis.response.speak(speechOutput);
            mythis.emit(':responseReady');
        });
  },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
