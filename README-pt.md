[![](https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg)](https://bluemix.net)
[![Platform](https://img.shields.io/badge/platform-nodejs-lightgrey.svg?style=flat)](https://developer.ibm.com/node/)

# Crie um chatbot usando Serverless com IBM Cloud Functions | Serverless Chatbot

Utilize o serviço [IBM Cloud Functions](https://www.ibm.com/cloud/functions) e o [Watson Assistant](https://www.ibm.com/cloud/watson-assistant-2/) para criar um chatbot **sem servidor**. Não é necessário configurar nenhum servidor, físico ou virtual, para lançar o seu chatbot. Caso não tenha um chatbot ou não saiba como construir um, acesse e leia o [blog sobre criação de chatbot usando Watson Assistant](https://medium.com/ibmdeveloperbr/watson-assistant-como-criar-o-seu-chatbot-usando-skills-e-assistants-755b4677984b/).

![](https://github.com/victorshinya/serverless-chatbot/blob/master/doc/source/images/architecture.jpg)

## Componentes e tecnologias usadas

* [IBM Cloud Functions](https://cloud.ibm.com/openwhisk): Plataforma FaaS (Function-as-a-Service), baseado no Apache Openwhisk, no qual executa funções em resposta a eventos.
* [Node.js](https://developer.ibm.com/?s=node): Plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis.
* [Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant-formerly-conversation): Plataforma de criação e gerenciamento de interfaces conversacionais baseado em NLP (Natural Language Processing), ou chatbots.

## Como configurar e subir na nuvem

Para configurar e subir, é necessário ter o [IBM Cloud CLI](https://cloud.ibm.com/docs/cli/reference/ibmcloud/download_cli.html#install_use) e [IBM Cloud Functions CLI](https://cloud.ibm.com/openwhisk/learn/cli) instalado no seu computador e seguir o passo a passo abaixo. E, para subir na IBM Cloud, basta ter uma conta e clicar no botão abaixo. Caso ainda não conheça, acesse o blog no Medium da [IBM Developer Brasil](https://medium.com/ibmdeveloperbr/o-que-e-a-ibm-cloud-e-como-subir-a-sua-primeira-aplicacao-na-nuvem-41bfd260a2b7) para entender mais.

### 1. Baixe a aplicação

```sh
git clone https://github.com/victorshinya/serverless-chatbot.git
cd serverless-chatbot
```

### 2. Instale todas as dependências

```sh
npm install
```

### 3. Abra o projeto em um editor de texto e substitua {iam_apikey} e {assistant_skillid} pelas credenciais do Watson Assistant e remova a extensão **.example** do arquivo (deve ficar como **.env**, sem o example)

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

### 4. Crie uma *Action* dentro da IBM Cloud

```sh
npm run create
```

### 5. Crie uma REST API a partir da *Action*

```sh
npm run create-api
```

### 6. Substitua {URL} pela URL gerada no terminal após a criação da REST API e execute o comando

```sh
curl -X POST {URL} -H 'Content-Type: application/json' -d '{"input": {"text": "Olá"}
```

## License

MIT License

Copyright (c) 2018 Victor Kazuyuki Shinya
