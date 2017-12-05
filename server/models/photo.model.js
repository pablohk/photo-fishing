const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require('./User.model');
const Location = require('./location.model');


const photoSchema = new Schema({
  _user: {type:Schema.Types.ObjectId, ref:'User'},
  _location : {type:Schema.Types.ObjectId, ref:'Location'},
  description: { type: String, required: true},
  title: {type: String, required : true},
  imageURL :{type: String, required: true},
  priv: {type : Boolean, required: true, default: true },
  },
    {
      timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

module.exports = mongoose.model('Photo', phototSchema);
