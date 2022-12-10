const admin = require('firebase-admin');
const dbKey = require('./secret/key.db.json');

// init db
const dbApp = admin.initializeApp(
    {
        credential: admin.credential.cert(dbKey),
        databaseURL: 'https://helloexpressjs.firebaseio.com',
    },
    'db',
);
const db = admin.firestore(dbApp);

//export db
module.exports = db;
