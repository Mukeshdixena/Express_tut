const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.send('home ')
})
router.get('/product', (req, res, next) => {
    res.send('product is here ')
})


module.exports = router;