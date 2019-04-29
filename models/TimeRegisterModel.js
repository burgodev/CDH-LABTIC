let mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TimeRegisterSchema = new Schema({
  year: {
    type: Schema.types.Number,
    required: 'Year is required'
  },
  month: {
    type: Schema.types.Number,
    required: 'Month is required',
  },

  userId: {
    type: Schema.types.ObjectId,
    ref: "User"
  },

  workTimeLeft: {
    type: Schema.types.Number,
    required: 'Work Time Left is required',
  },

  days: {
    type: [ {
      type: Schema.types.ObjectId,
      ref: "Day"

    } ]
  },

})

module.exports = mongoose.model('TimeRegister', TimeRegisterSchema)
