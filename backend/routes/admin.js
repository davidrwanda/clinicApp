const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/', adminController.getAdminIndex);


module.exports = router;