const mongoose = require('mongoose');

function isObjIdValid(req, res, next){
  if (!mongoose.Types.ObjectId.isValid(req.params.id)){
    return res.status(400).json({message: 'Specified id is not valid'});
  }
  next();
};
module.exports = isObjIdValid;
