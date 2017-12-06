const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');
const Location = require('../../models/location.model');
const User = require('../../models/user.model');
const Remark = require('../../models/remark.model');
const isObjIdValid=require('../../utils/isObjIdValid');

/*   Get all Remarks */
router.get('/', loggedIn, (req, res, next) => {
  Remark.find({})
    .then( items =>{ res.status(200).json(items);})
    .catch( (err)=>{res.status(500).json(err);})
});

/*   Get all Remarks made off by me */
router.get('/myRemark', loggedIn, (req, res, next) => {
  Remark.find({'_user':{$eq:req.user._id}})
    .populate('_user _location')
    .then( items =>{ res.status(200).json(items);})
    .catch( (err)=>{res.status(500).json(err);})
});

/*  Get all Remarks made off concrete user */
router.get('/byUser/:id', loggedIn,  isObjIdValid, (req, res, next) => {
  Remark.find({'_user':{$eq:req.params.id}})
    .populate('_user _location')
    .then( items =>{ res.status(200).json(items);})
    .catch( (err)=>{res.status(500).json(err);})
});

/*  Get all Remarks by concrete location */
router.get('/byLocation/:id', loggedIn,  isObjIdValid, (req, res, next) => {
  Remark.find({'_location':{$eq:req.params.id}})
    .populate('_user _location')
    .then( items =>{ res.status(200).json(items);})
    .catch( (err)=>{res.status(500).json(err);})
});

/*  Add  Remark */
router.post('/:id', loggedIn,  isObjIdValid, (req, res, next) => {

 const contain = req.body.contain;

 const newObj = new Remark({
    _user : req.user._id,
    _location : req.params.id,
    contain });
  newObj.save()
    .then( item => res.status(200).json(item))
    .catch ((err) => res.status(500).json(err))
});

/*  Edit a Remark */
router.put('/:id/edit/:locationId', loggedIn, isObjIdValid, (req,res,next)=>{

  const newObj ={
     _user : req.user._id,
     _location : req.params.locationId,
     contain : req.body.contain
   };

  Remark.findByIdAndUpdate(req.params.id,newObj,{new:true})
    .then( (item)=>{
      console.log(item);
      res.status(200).json(item);})
    .catch( (err)=> res.status(500).json(err))
});

/*   Delete particular Remark by your ID */
router.delete('/:id',loggedIn, isObjIdValid,(req,res,next) => {
  Remark.remove({_id:req.params.id})
    .then( () => res.status(200).json("Remark has been removed!"))
    .catch((err) => res.status(500).json(err))
});

module.exports = router;
