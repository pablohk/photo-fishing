const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt   = require('bcrypt');
const User = require('./user.model');
const Location = require('./location.model');


const remarkSchema = new Schema({
  _user: {type:Schema.Types.ObjectId, ref:'User'},
  _location : {type:Schema.Types.ObjectId, ref:'Location'},
  contain: { type: String, required: true},
},
  {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

module.exports =  mongoose.model('Remark', remarkSchema);
