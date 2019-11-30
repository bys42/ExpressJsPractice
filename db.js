const admin = require("./firebase");

// init db
const db = admin.firestore();

//export db
module.exports = db;