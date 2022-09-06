const express = require('express');

const router = express.Router();

router.get('register', (req, res) => {
    console.log(req, res);
});

module.exports = router;