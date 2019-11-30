function adminGuard(router) {
    router.use((req, res, next) => {
        if (res.locals.auth.isAdmin) {
            next();
        } else {
            res.redirect ('/');
        }
    })
}

module.exports = adminGuard;