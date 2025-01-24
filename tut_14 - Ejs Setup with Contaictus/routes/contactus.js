const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactus', (req, res, next) => {
    res.render('contactus', {
        pageTitle: 'Contaic Us',
        path: '/contactus',
    });
});
router.post('/success', (req, res, next) => {
    res.render('success', {
        pageTitle: 'Success Message',
        path: '/success',
    });
});

module.exports = router;
