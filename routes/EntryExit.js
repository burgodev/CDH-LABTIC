let express = require('express')
let router = express.Router()


module.exports = router

let mongoose = require('mongoose')
let EntryExit = require('../models/EntryExitModel')

router.get('/', function (req,res,next){

  EntryExit.find({}, null, {lean:true}, function (err, EntryExit){
    res.json(EntryExit)
  })
})

router.get('/id:', function(req,res,next){

  EntryExit.findById(req.params.id, null, {lean:true}, function (err, EntryExit){
    res.json(EntryExit)

  })
})

router.post('/', function(req,res,next){

  EntryExit.create(req.body, null, {lean:true}, function(err, EntryExit){
    res.json(EntryExit);
  })
})

router.put('/:id', function(req,res,next){

  EntryExit.findByIdAndUpdate(req.params.id, req.body, {lean: true, new:true}, function (err, EntryExit){
    res.json(EntryExit)
  })
})

router.delete('/:id', function(req,res,next){

  EntryExit.findByIdAndRemove(req.params.id, function(err, EntryExit){
    res.json(EntryExit)
  })
})
