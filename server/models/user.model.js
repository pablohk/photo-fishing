const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const FISH = require('./fish.enum');
const ROLE = require('./role.enum');

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  age: Number,
  city: String,
  preferFish:  {type : String, enum: FISH},
 role: {type: String, enum: ROLE, required:true, default: ROLE[0]}
},
{
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports =  mongoose.model('User', userSchema);
