const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const knotSchema = new Schema({
  _user: {type:Schema.Types.ObjectId, ref:'User'},
  _localization : {type:Schema.Types.ObjectId, ref:'Localization'},
  type: { type: String, required: true },
  imageURL: { type: String, required: true },
  instruccion: { type: String },
  description: { type: String }
},
  {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

module.exports =  mongoose.model('Knot', knotSchema);
