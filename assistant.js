/**
 * Send user's input and conversation context to Watson to process and returns
 * an output based on user's knowledge base.
 *
 * @param {Object} input The text message to send to Watson
 * @param {Object} context The context managed by Watson
 * @returns {Object} Returns the complete object
 */
const WatsonAssistantV1 = require('watson-developer-cloud/assistant/v1')
const assistant = new WatsonAssistantV1({
    version: '2019-02-28',
    iam_apikey: '{iam_apikey}',
    url: 'https://gateway.watsonplatform.net/assistant/api'
})

function main(params) {
    return new Promise((resolve, reject) => {
        assistant.message({
            input: params.input,
            context: params.context,
            workspace_id: '{workspace_id}'
        }, (err, response) => {
            if (err) {
                reject(err)
            } else {
                resolve(response)
            }
        })
    })
}
