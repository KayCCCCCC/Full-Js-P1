const router = require("express").Router();

const homeRoutes = require('./homeRoute');


router.use('/home', homeRoutes);


module.exports = router;