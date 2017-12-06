const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const knotSchema = new Schema({
  type: { type: String, required: true },
  imageURL: { type: String, required: true },
  instruction: { type: String },
  description: { type: String }
},
  {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

module.exports =  mongoose.model('Knot', knotSchema);
