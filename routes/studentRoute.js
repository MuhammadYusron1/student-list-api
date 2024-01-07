const express = require('express');
const router = express.Router();

// Importing files from controllers

router.route("/").get((req, res, next) => {
    res.status(200);
    res.send("Hello, world!");
});

module.exports = router;