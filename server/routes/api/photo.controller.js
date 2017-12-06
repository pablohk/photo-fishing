const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');
const Location = require('../../models/location.model');
const User = require('../../models/user.model');
const Photo = require('../../models/photo.model');
const isObjIdValid=require('../../utils/isObjIdValid');

/*   Get all Photo */
router.get('/', loggedIn, (req, res, next) => {
  Photo.find({})
    .populate('_user _location')
    .then( items =>{ res.status(200).json(items);})
    .catch( (err)=>{res.status(500).json(err);})
});

/*   Get all Photos made off by me */
router.get('/myPhoto', loggedIn, (req, res, next) => {
  Photo.find({'_user':{$eq:req.user._id}})
    .populate('_user _location')
    .then( items =>{ res.status(200).json(items);})
    .catch( (err)=>{res.status(500).json(err);})
});

/*  Get all Photos made off concrete user */
router.get('/byUser/:id', loggedIn, (req, res, next) => {
  Photo.find({'_user':{$eq:req.params.id}})
    .populate('_user _location')
    .then( items =>{ res.status(200).json(items);})
    .catch( (err)=>{res.status(500).json(err);})
});

/*  Get all Photos by concrete location */
router.get('/byLocation/:id', loggedIn, isObjIdValid,  (req, res, next) => {
  Photo.find({'_location':{$eq:req.params.id}})
    .populate('_user _location')
    .then( items =>{ res.status(200).json(items);})
    .catch( (err)=>{res.status(500).json(err);})
});


/*  Add  Photo */
router.post('/:id', loggedIn, isObjIdValid,  (req, res, next) => {

 const title = req.body.title;
 const description = req.body.description;
 const imageURL = req.body.imageURL;
 const priv = req.body.priv;

 const newObj = new Photo({
    _user : req.user._id,
    _location : req.params.id,
    title,
    description,
    imageURL,
    priv });
    //res.status(200).json(newObj);
  newObj.save()
    .then( item => res.status(200).json(item))
    .catch ((err) => res.status(500).json(err))
});

/*   Delete particular Photo by your ID */
router.delete('/:id',loggedIn, isObjIdValid,(req,res,next) => {
  Photo.remove({_id:req.params.id})
    .then( () => res.status(200).json("Photo has been removed!"))
    .catch((err) => res.status(500).json(err))
});

/*  Edit photo */
router.put('/:id/edit/:locationId', loggedIn, isObjIdValid, (req,res,next)=>{
  const newObj ={
     _user : req.user._id,
     _location : req.params.locationId,
     title : req.body.title,
     description : req.body.description,
     imageURL : req.body.imageURL
   };
  //res.status(200).json(newObj)
  Photo.findByIdAndUpdate(req.params.id,newObj,{new : true})
    .then( item => res.status(200).json(item))
    .catch( (err)=> res.status(500).json(item))
});
module.exports = router;
