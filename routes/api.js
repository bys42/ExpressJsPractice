const express = require('express');
const router = express.Router();
const db = require('../db');

// 登入
router.post('/login', function (req, res, next) {

});

// 登出
router.post('/logout', function (req, res, next) {

});

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
        })
});

// 更新商品
router.put('/product/:pid', function (req, res, next) {

});

// 刪除商品
router.delete('/product/:pid', function (req, res, next) {

});

module.exports = router;
