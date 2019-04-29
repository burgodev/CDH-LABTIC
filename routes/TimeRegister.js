let express = require('express')
let router = express.Router()

/* GET home page. */

module.exports = router

let mongoose = require('mongoose')
let TimeRegister = require('../models/TimeRegisterModel')

router.get('/', function (req, res, next) {

  TimeRegister.find({}, null, {lean: true}, function (err, TimeRegister) {
    res.json(TimeRegister)

  })
})

router.get('/:id', function (req, res, next) {

  TimeRegister.findById(req.params.id, null, {lean: true}, function (err, TimeRegister){
    res.json(TimeRegister)

  })

})

router.post('/', function (req, res, next) {

  TimeRegister.create(req.body, null, {lean:true}, function (err, TimeRegister){
    res.json(TimeRegister);

  })
})

router.put('/:id', function (req, res, next) {

  TimeRegister.findByIdAndUpdate(req.params.id, req.body, {lean: true, new: true}, function (err, TimeRegister) {
    res.json(TimeRegister)

  })
})

router.delete('/:id', function (req, res, next) {

  TimeRegister.findByIdAndRemove(req.params.id, function(err, TimeRegister){
    res.json(TimeRegister);
  })



})

