const admin = require("firebase-admin");

const serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://helloexpressjs.firebaseio.com"
});

// init db
const db = admin.firestore();

//export db
module.exports = db;