const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const transactionController = require('../controllers/transaction.controller');

router.route('/')
.post(auth(), transactionController.addTransaction)


module.exports = router;