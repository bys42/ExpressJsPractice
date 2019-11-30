const express = require('express');
const router = express.Router();
const db = require('../db');
const admin = require('../firebase');
const adminGuard = require('../middleware/admin-guard');

// 登入
router.post('/login', function (req, res, next) {
    const idToken = req.body.idToken;
    const sessionKey = req.app.locals.sessionKey // express supplied
    const expiresIn = 12 * 24 * 60 * 60 * 1000; // 1 stands for 0.001s in JS

    admin.auth().createSessionCookie(idToken, { expiresIn })
        .then(sessionCookie => {
            console.log(sessionCookie);
            const options = {
                maxAge: expiresIn,
                httpOnly: true
            };
            res.cookie(sessionKey, sessionCookie, options);
            res.status(200).json({ msg: 'Login Complete' });
        });
});

// 登出
router.post('/logout', function (req, res, next) {
    const sessionKey = req.app.locals.sessionKey;
    const sessionCookie = req.cookies[sessionKey] || '';
    res.clearCookie(sessionKey);
    admin.auth().verifySessionCookie(sessionCookie)
        .then(user => {
            admin.auth().revokeRefreshTokens(user.sub);
            res.status(200).json({ msg: 'OK' })
        })
        .catch(err => {
            res.status(200).json({ msg: 'OK' })
        })
});

adminGuard(router);

// 新增商品
router.post('/product/create', function (req, res, next) {
    const product = req.body;
    db
        .collection('products')
        .add(product)
        .then(responce => { // after operation complete properly
            res.status(200).json({
                msg: 'Create Product Success',
                responce: responce
            });
        })
        .catch(err => {  // if operation failed
            res.status(500).json({
                msg: 'Create Product Failed, please try again',
                responce: err
            });
        });
});

// 更新商品
// http put /api/product/:pid
router.put('/product/:pid', function (req, res, next) {
    const pid = req.params.pid;
    const product = req.body;
    console.log(pid, product)
    db
        .collection('products')
        .doc(pid)
        .update(product)
        .then(() => {
            res.status(200).json({ msg: 'update complete' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err: err });
        });
});

// 刪除商品
router.delete('/product/:pid', function (req, res, next) {
    const pid = req.params.pid;
    db
        .collection('products')
        .doc(pid)
        .delete()
        .then(() => {
            res.status(200).json({ msg: 'Delete Complete' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err: err });
        });
});

module.exports = router;
