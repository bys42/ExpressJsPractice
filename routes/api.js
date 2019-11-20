const express = require('express');
const router = express.Router();

// 登入
router.post('/login', function (req, res, next) {

});

// 登出
router.post('/logout', function (req, res, next) {

});

// 新增商品
router.post('/product/create', function (req, res, next) {

});

// 更新商品
router.put('/product/:pid', function (req, res, next) {

});

// 刪除商品
router.delete('/product/:pid', function (req, res, next) {

});

module.exports = router;
