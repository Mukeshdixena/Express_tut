const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const contactControllers = require('../controllers/contact')

router.get('/contactus', contactControllers.getContactusPage);
router.post('/success', contactControllers.postSuccessPage);

module.exports = router;
