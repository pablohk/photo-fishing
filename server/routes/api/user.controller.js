const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');
const User = require('../../models/user.model');
const isObjIdValid=require('../../utils/isObjIdValid');

/*   Get all User */
router.get('/', loggedIn, (req, res, next) => {
  User.find({})
    .then( items =>{ res.status(200).json(items);})
    .catch( (err)=>{res.status(500).json(err);})
});

/*  Get  User by ID  */
router.get('/:id', loggedIn, (req, res, next) => {
  User.findById(req.params.id)
    .then( item =>{ res.status(200).json(item);})
    .catch( (err)=>{res.status(500).json(err);})
});

module.exports = router;
