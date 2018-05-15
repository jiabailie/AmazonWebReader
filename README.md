# Alexa Web Reader Skill

## Development

* Based on [fact skill sample](https://github.com/alexa/skill-sample-nodejs-fact) from Amazon (Apache license).
* Follow the [step by step](https://github.com/alexa/skill-sample-nodejs-fact/blob/master/step-by-step/1-voice-user-interface.md) to deploy.
* Point `http://aka.ms/webreader` to the web page you want to speak on [URL Manager](https://urlmanager.cloudapp.net/app/html/index.html#/aka.ms).

## Test and usage

1. Update web page with text to speak
1. (Necessary only when the URL changes) Change WebPage in `index.js`, zip files (including `node_modules`, but not the up-level folder) then upload to [Lambda](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions)
1. Try skill on the [test page](https://github.com/alexa/skill-sample-nodejs-fact/blob/master/step-by-step/4-testing.md)
1. Set up internal recording according to [How To Record High Quality Audio](https://sway.com/DE6iaW0y2ty4yS8f?ref=Link) to grab waves through listening to the response.
