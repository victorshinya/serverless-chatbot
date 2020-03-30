/**
 * Save all Watson Assistant returned object to a MongoDB instance
 * for future analysis.
 *
 * @param {Object} input The text message to send to Watson
 * @param {Object} output The return message from Watson
 * @param {Object} intents The recognized intent based on user's knowledge base
 * @param {Object} entities The list of recognized entities based on user's knowledge base
 * @param {Object} context The context managed by Watson
 * @param {String} session_id The session id managed by Watson
 * @returns {Object} Returns the object
 */
const MongoClient = require('mongodb').MongoClient

function main(params) {
	return new Promise((resolve, reject) => {
        MongoClient.connect('{mongodb_uri}', (err, client) => {
            if (err) {
                reject(err)
            } else {
                console.log("Connected successfully to server")

                const db = client.db('{mongodb_db}')
                const collection = db.collection('{mongodb_collection}')
                collection.insertOne(params, (err, doc) => {
                    client.close()
                    if (err) {
                        reject(err)
                    } else {
                        resolve(doc)
                    }
                })
            }
        })
	})
}

exports.main = main
