const express = require('express');
const db = require('../db');
const router = express.Router();

// 首頁路由
router.get('/', async function (req, res, next) {
  // get doc:home from set:content (in firebase)
  const doc = await db.doc('content/home').get();

  res.locals.title = doc.data().title;
  res.locals.subtitle = doc.data().subtitle;

  const productDocs = await db
    .collection('products')
    .orderBy('createdAt', 'desc')
    .get();
  
  const products = [];
  productDocs.forEach(doc => {
    const product = doc.data();
    products.push(product);
    product.id = doc.id;
  });
  res.locals.products = products;

  res.render('index'); // use template index.ejs
});

module.exports = router;
