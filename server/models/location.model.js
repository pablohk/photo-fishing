const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const locationSchema = new Schema({
  lat: {type: Number , required: true},
  lon: {type: Number , required: true},
  rating: {type: Number, required: true},
  name: {type: String, required: true},
  imageURL: {type: String },
  priv : {type: Boolean, required: true, default: true },
},
  {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

module.exports = mongoose.model('Location', locationSchema);
