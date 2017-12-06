const mongoose = require('mongoose');
const ROLE = require('../models/role.enum');

function isAdminRole(req, res, next) {
  if (!(req.user.role == ROLE[1])){
      return res.status(400).json({message: "Unauthorized permission"});
    }
    next();
};
module.exports = isAdminRole;
