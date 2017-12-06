const express  = require('express');
const router   = express.Router();
const isObjIdValid=require('../../utils/isObjIdValid');
const isAdminRole=require('../../utils/isAdminRole');
const Knot = require('../../models/knot.model');

const retrieveData = (req)=>{
  const data ={
    type:req.body.type,
    imageURL:req.body.imageURL,
    instruction:req.body.instruction,
    description:req.body.description,
  }
  return data;
}

/*
  KNOT: Consulting instructions for making knots
*/

/*
  Get all Knot
*/
router.get('/', (req, res, next) => {
    Knot.find({})
      .then( items =>{ res.status(200).json(items);})
      .catch( (err)=>{res.status(500).json(err);})
});

/*
  add new Knot
*/
router.post('/', (req, res, next) => {
  const newObj = new Knot(retrieveData(req));
  console.log(retrieveData(req));
  newObj.save()
    .then( item =>res.status(200).json(item))
    .catch( (err) => res.status(500).json(err));
});

/*
  Get particular Knot by its ID
*/
router.get('/:id',isObjIdValid,(req,res,next) => {
  Knot.findById(req.params.id)
    .then( item => res.status(200).json(item))
    .catch((err) => res.status(500).json(err))
});


// delete and edit ONLY FOR ADMIN ROLE --------------------------
/*
  Delete particular Knot by its ID
*/
router.delete('/:id',isAdminRole, isObjIdValid,(req,res,next) => {
  Knot.remove({_id:req.params.id})
    .then( () => res.status(200).json("Knot has been removed!"))
    .catch((err) => res.status(500).json(err))
});

/*
  Edit a Location
*/
router.put('/:id',isAdminRole, isObjIdValid, (req,res,next)=>{
const updateObj = retrieveData(req);

Knot.findByIdAndUpdate(req.params.id,updateObj,{new:true})
  .then(item=>res.status(200).json(item))
  .catch( (err)=> res.status(500).json(err))
});


module.exports = router;
