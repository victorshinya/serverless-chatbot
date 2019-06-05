[![](https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg)](https://bluemix.net)
[![Platform](https://img.shields.io/badge/platform-nodejs-lightgrey.svg?style=flat)](https://developer.ibm.com/node/)

# Create a Serverless Chatbot for your business

Use [IBM Cloud Functions](https://www.ibm.com/cloud/functions) and [Watson Assistant](https://www.ibm.com/cloud/watson-assistant-2/) service to create a **serverless** chatbot. There is no need to setup a Virtual Server (or Virtual Machine) or a Cloud Foundry to deploy and use your own chatbot. If you don't know how to build a chatbot, [read my blog](https://medium.com/ibmdeveloperbr/watson-assistant-como-criar-o-seu-chatbot-usando-skills-e-assistants-755b4677984b/).

![](https://github.com/victorshinya/serverless-chatbot/blob/master/doc/source/images/architecture.jpg)

## Components and technologies

* [IBM Cloud Functions](https://cloud.ibm.com/openwhisk): FaaS (Function-as-a-Service) platform that executes functions in response to events. It is based on Apache Openwhisk project.
* [Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant): Watson Assistant lets you build conversational interfaces into any application, device, or channel.
* [MongoDB](https://cloud.ibm.com/catalog/services/databases-for-mongodb): MongoDB is a JSON document store with a rich query and aggregation framework.

## Deployment

To setup and deploy, you need to install [IBM Cloud CLI](https://cloud.ibm.com/docs/cli/reference/ibmcloud/download_cli.html#install_use) and [IBM Cloud Functions CLI](https://cloud.ibm.com/openwhisk/learn/cli) in your local machine and then, follow all steps below.

### 1. Clone this repository.

```sh
git clone https://github.com/victorshinya/serverless-chatbot.git
cd serverless-chatbot
```

### 2. Open the project in a text editor and replace `{iam_apikey}` and `{workspace_id}` on `assistant.js` by your Watson Assistant's credentials, and replace `{mongodb_uri}` on `mongodb.js` with your MongoDB URI.

```sh
ibmcloud fn action create assistant assistant.js
ibmcloud fn action create mongodb mongodb.js
ibmcloud fn action create sequence --sequence assistant, mongodb
```

## License

MIT License

Copyright (c) 2018 Victor Kazuyuki Shinya
