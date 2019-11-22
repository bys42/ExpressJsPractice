const express = require('express');
const db = require('../db');
const router = express.Router();

// 首頁路由
router.get('/', async function (req, res, next) {
  // get doc:home from set:content (in firebase)
  const doc = await db.doc('content/home').get();
  
  res.locals.title = doc.data().title;
  res.locals.subtitle = doc.data().subtitle;
  
  res.render('index'); // use template index.ejs
});

module.exports = router;
