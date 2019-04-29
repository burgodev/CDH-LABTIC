let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EntryExitSchema = new Schema({

  entry:{
    type: Schema.types.Number,
    required: 'Entry is required'
  },

  exit:{
    type: Schema.types.Number
  },

  expectedExit:{
    type: Schema.types.Number,
    required: 'ExpectedExit is required'
  }

})

module.exports = mongoose.model('EntryExit', EntryExitSchema)
