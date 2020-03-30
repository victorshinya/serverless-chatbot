/**
 * Send user's input, assistant context and session id to Watson to process
 * and returns an output based on assistant's knowledge base.
 *
 * @param {Object} input The text message to send to Watson
 * @param {Object} context The context managed by Watson
 * @param {String} session_id The session id managed by Watson
 * 
 * @return {Object} Returns the complete object
 */
const WatsonAssistantV2 = require('ibm-watson/assistant/v2')
const assistant = new WatsonAssistantV2({
    version: '2019-02-28',
    iam_apikey: '{iam_apikey}',
    url: 'https://gateway.watsonplatform.net/assistant/api',
})

async function main(params) {
    try {
        if (!params.session_id) {
            const sessionResponse = await assistant.createSession({
                assistant_id: '{assistant_id}'
            })
            console.log(`session_id: ${sessionResponse.session_id}`)
            params.session_id = sessionResponse.session_id
        }
        console.log(`params: ${JSON.stringify(params)}`)
        const response = await assistant.message({
            assistant_id: '{assistant_id}',
            session_id: params.session_id,
            input: {
                text: params.input.text,
                options: {
                    return_context: true,
                }
            },
            context: params.context
        })
        response.session_id = params.session_id
        return response
    }
    catch(err) {
        console.error(`error: ${err.message}`)
        return err
    }
}

exports.main = main
