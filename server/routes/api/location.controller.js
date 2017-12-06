const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');
const Location = require('../../models/location.model');
const isObjIdValid=require('../../utils/isObjIdValid');

const retrieveData = (req)=>{
  const data ={
    lat:req.body.lat,
    lon:req.body.lon,
    rating:req.body.rating,
    name:req.body.name,
    imageURL:req.body.imageURL,
    priv:req.body.priv
  }
  return data;
}

/*  Get all Locations */
router.get('/',loggedIn, (req, res, next) => {
    Location.find({})
      .then( items =>{ res.status(200).json(items);})
      .catch( (err)=>{res.status(500).json(err);})
});

/*  add new Location */
router.post('/', loggedIn, (req, res, next) => {
  const newObj = new Location(retrieveData(req));

  newObj.save()
    .then( item =>res.status(200).json(item))
    .catch( (err) => res.status(500).json(err));
});

/*  Get particular Location by your ID */
router.get('/:id', loggedIn, isObjIdValid,(req,res,next) => {
  Location.findById(req.params.id)
    .then( item => res.status(200).json(item))
    .catch((err) => res.status(500).json(err))
});

/*   Delete particular Location by your ID */
router.delete('/:id',loggedIn, isObjIdValid,(req,res,next) => {
  Location.remove({_id:req.params.id})
    .then( () => res.status(200).json("Location has been removed!"))
    .catch((err) => res.status(500).json(err))
});

/*  Edit a Location */
router.put('/:id', loggedIn, isObjIdValid, (req,res,next)=>{
  const updateObj = retrieveData(req);

  Location.findByIdAndUpdate(req.params.id,updateObj,{new:true})
    .then(item=>{
      console.log(item);
      res.status(200).json(item);})
    .catch( (err)=> res.status(500).json(err))
});


module.exports = router;
