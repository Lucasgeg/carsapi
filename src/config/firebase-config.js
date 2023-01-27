var admin = require("firebase-admin");

var serviceAccount = require("../../ressources/private-key/boc-learnit-lds-nodejs-api-firebase-adminsdk-6nubr-ef0f6102e7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();

module.exports = firestore;