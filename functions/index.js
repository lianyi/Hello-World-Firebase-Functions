var functions = require('firebase-functions');

// Start writing Firebase Functions
// https://firebase.google.com/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest(  (request, response) => {
        response.send(
        "Hello World! :-)",
        "request:", request,
        "response:", response);
});
