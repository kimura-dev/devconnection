const express = require('express');
const router = express.Router();

// @route GET api/user
// @desc Test Route
// @access Public - No token
router.get('/', (req, res) => res.send('User route'));

module.exports = router;
