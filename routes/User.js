let express = require('express')
let router = express.Router()


module.exports = router

let mongoose = require('mongoose')
let User = require('../models/UserModel')

router.get('/', function (req,res,next){

  User.find({}, null, {lean:true}, function (err, User){
    res.json(User)
  })
})

router.get('/id:', function(req,res,next){

  User.findById(req.params.id, null, {lean:true}, function (err, User){
    res.json(User)

  })
})

router.post('/', function(req,res,next){

  User.create(req.body, null, {lean:true}, function(err, User){
    res.json(User);
  })
})

router.put('/:id', function(req,res,next){

  User.findByIdAndUpdate(req.params.id, req.body, {lean: true, new:true}, function (err, User){
    res.json(User)
  })
})

router.delete('/:id', function(req,res,next){

  User.findByIdAndRemove(req.params.id, function(err, User){
    res.json(User)
  })
})
