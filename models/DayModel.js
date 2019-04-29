let mongoose = require('mongoose')

const Schema = new mongoose.Schema;

const DaySchema = new Schema({
  day:{
    type: Schema.types.Number,
    required: 'Day is required'
  },

  entryExit:{
    type: [{
      type: Schema.types.ObjectId,
      required: 'EntryExit is required',
      ref: 'EntryExit'
    }]
  },

  timeWorked:{
    type: Schema.types.Number,
    required: 'TimeWorked is required'
  },

  justification:{
    type: Schema.types.String
  }

})

module.exports = mongoose.model('Day', DaySchema)
