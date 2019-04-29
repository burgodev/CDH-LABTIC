let mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  name: {
    type: Schema.types.String,
    required: 'Name is required'
  },

  surname: {
    type: Schema.types.String,
    required: 'Surname is required'
  },

  email: {
    type: Schema.types.String,
    required: 'Email is required',
    unique: true
  },

  password: {
    type: Schema.types.String,
    required: 'Password is required',
  },

  birthday: {
    type: Schema.types.Number,
    required: 'Birthday is required',
  },

  isAdm: {
    type: Schema.types.Boolean,
    required: 'IsAdm is required'
  },

  currentTimeRegister: {
    type: Schema.types.ObjectId,
    ref: "TimeRegister"
  },

  cpf: {
    type: Schema.types.String,
  },

  entryDate: {
    type: Schema.types.Number,
  },

  exitDate: {
    type: Schema.types.Number,
  }
})

module.exports = mongoose.model('User', UserSchema)
