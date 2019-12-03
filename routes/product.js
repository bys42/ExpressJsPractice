const express = require('express');
const router = express.Router();
const db = require('../db');
const adminGuard = require('../middleware/admin-guard');

// 產品詳情路由
router.get('/show/:pid', async function (req, res, next) {
    const pid = req.params.pid;
    const doc = await db
        .collection('products')
        .doc(pid)
        .get();
    const product = doc.data();
    res.locals.product = product;
    // 渲染product-show.ejs
    res.render('product-show');
});

adminGuard(router);

// 建立產品路由
router.get('/create', function (req, res, next) {
    // 渲染product-create.ejs
    res.render('product-create');
});

// /product/edit/:pid, ":" indicates the following pid is a variable, res.params.pid
router.get('/edit/:pid', async function (req, res, next) {
    const pid = req.params.pid;
    const doc = await db
        .collection('products')
        .doc(pid)
        .get();
    const product = doc.data();
    product.id = doc.id;
    res.locals.product = product;
    // 渲染product-edit.ejs
    res.render('product-edit');
});

module.exports = router;
