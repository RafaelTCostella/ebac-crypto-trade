const express = require('express');

const statusRouter = require('./status');

const router = express.Router();

router.use('/status', statusRouter);

module.exports = router;
