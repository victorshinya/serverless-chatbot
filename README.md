[![](https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg)](https://bluemix.net)
[![Platform](https://img.shields.io/badge/platform-nodejs-lightgrey.svg?style=flat)](https://developer.ibm.com/node/)

# Create a Serverless Chatbot for your business

Use [IBM Cloud Functions](https://www.ibm.com/cloud/functions) and [Watson Assistant](https://www.ibm.com/cloud/watson-assistant-2/) service to create a **serverless** chatbot. There is no need to setup a Virtual Server (or Virtual Machine) or a Cloud Foundry to deploy and use your own chatbot. If you don't know how to build a chatbot, [read my blog](https://medium.com/ibmdeveloperbr/watson-assistant-como-criar-o-seu-chatbot-usando-skills-e-assistants-755b4677984b/).

If you want to read this content in Brazilian Portuguese, [click here](https://github.com/victorshinya/serverless-chatbot/blob/master/README-pt.md).

![](https://github.com/victorshinya/serverless-chatbot/blob/master/doc/source/images/architecture.jpg)

## Components and technologies

* [IBM Cloud Functions](https://cloud.ibm.com/openwhisk): FaaS (Function-as-a-Service) platform that executes functions in response to events. It is based on Apache Openwhisk project.
* [Node.js](https://developer.ibm.com/?s=node): Platform built on the Google Chrome JavaScript engine to easily build fast and scalable network applications.
* [Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant-formerly-conversation): Platform for creating and managing conversational interfaces based on NLP (Natural Language Processing), or chatbots.

## How to setup and deploy

To setup and deploy, you need to install [IBM Cloud CLI](https://cloud.ibm.com/docs/cli/reference/ibmcloud/download_cli.html#install_use) and [IBM Cloud Functions CLI](https://cloud.ibm.com/openwhisk/learn/cli) in your local machine and then, follow all steps below.

### 1. Clone this repository.

```sh
git clone https://github.com/victorshinya/serverless-chatbot.git
cd serverless-chatbot
```

### 2. Install all dependencies.

```sh
npm install
```

### 3. Open the project in a text editor and replace `{iam_apikey}` and `{assistant_skillid}` by your Watson Assistant's credentials and remove the extension **.example** from the file.

```editor
# Watson Assistant credential
IAM_APIKEY={iam_apikey}
ASSISTANT_SKILLID={assistant_skillid}

# Default VERSION and URL
# 2018-09-20 is the latest version for Watson Assistant v1
VERSION=2018-09-20
# This is the default API URL for Dallas (US-SOUTH)
# For other API URL, check the link https://cloud.ibm.com/apidocs/assistant#service-endpoint
URL=https://gateway.watsonplatform.net/assistant/api
```

### 4. Run the `create` script to create a new Action on IBM Cloud.

```sh
npm run create
```

### 5. Create a new API Rest from your Action.

```sh
npm run create-api
```

### 6. Replace `{URL}` by the generated URL from terminal after the API Rest creation and then run the command below.

```sh
curl -X POST {URL} -H 'Content-Type: application/json' -d '{"input": {"text": "Hello"}
```

## License

MIT License

Copyright (c) 2018 Victor Kazuyuki Shinya
