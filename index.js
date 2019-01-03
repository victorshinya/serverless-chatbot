require('dotenv').load()
const AssistantV1 = require('watson-developer-cloud/assistant/v1')
const assistant = new AssistantV1({
    version: process.env.VERSION || '2018-09-20',
    iam_apikey: process.env.IAM_APIKEY,
    url: process.env.URL || 'https://gateway.watsonplatform.net/assistant/api'
})

function main(args) {
    return new Promise((resolve, reject) => {
        assistant.message({
                input: args.input,
                context: args.context,
                workspace_id: process.env.ASSISTANT_SKILLID
            }, (err, response) => {
            if (err) {
                reject({ status: 'Error', message: err.message })
            }
            resolve(response)
        })
    })
}

exports.main = main
