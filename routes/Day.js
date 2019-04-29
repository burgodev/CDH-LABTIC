let express = require('express')
let router = express.Router()

/* GET home page. */

module.exports = router

let mongoose = require('mongoose')
let Day = require('../models/DayModel')

router.get('/', function (req, res, next) {

  Day.find({}, null, {lean: true}, function (err, Day) {
    res.json(Day)

  })
})

router.get('/:id', function (req, res, next) {

  Day.findById(req.params.id, null, {lean: true}, function (err, Day){
    res.json(Day)

  })

})

router.post('/', function (req, res, next) {

  Day.create(req.body, null, {lean:true}, function (err, Day){
    res.json(Day);

  })
})

router.put('/:id', function (req, res, next) {

  Day.findByIdAndUpdate(req.params.id, req.body, {lean: true, new: true}, function (err, Day) {
    res.json(Day)

  })
})

router.delete('/:id', function (req, res, next) {

  Day.findByIdAndRemove(req.params.id, function(err, Day){
    res.json(Day);
  })
})

