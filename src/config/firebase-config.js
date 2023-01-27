var admin = require("firebase-admin");

var serviceAccount = require("../../ressources/private-key/carsapi-8bbb2-firebase-adminsdk-t3rb0-4e51b302c0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

module.exports = firestore;
