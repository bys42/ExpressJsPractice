const admin = require('../firebase')
const db = require('../db')

function loginChecker(router) {
    router.use(async (req, res, next) => {
        const sessionKey = req.app.locals.sessionKey;
        const sessionCookie = req.cookies[sessionKey] || '';// set empty string if not exist

        // default login status
        const auth = {
            isLogin: false,
            isAdmin: false,
            user: {}
        }

        // verify
        admin.auth().verifySessionCookie(sessionCookie, true)
            .then(async user => {
                const doc = await db.doc(`admins/${user.email}`).get();

                auth.isLogin = true;
                auth.isAdmin = doc.exists;
                auth.user = user;
                res.locals.auth = auth;

                next();
            })
            .catch(err => {
                res.locals.auth = auth;
                next();
            });
    })
}

module.exports = loginChecker;