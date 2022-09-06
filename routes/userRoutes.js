const express = require('express');

const router = express.Router();

router.get('register', (req, res) => {
    console.log(req, res);
});

router.post("register", (req, res) => {
    console.log(req.body);
});



module.exports = router;