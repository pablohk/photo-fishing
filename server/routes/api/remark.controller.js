const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');
const Location = require('../../models/location.model');
const User = require('../../models/user.model');

router.get('/', (req, res, next) => {

});


router.post('/', loggedIn, (req, res, next) => {

});



module.exports = router;
