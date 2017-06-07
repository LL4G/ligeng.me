'use strict'

var mongoose = require('mongoose');
require('../schemas/tweet');

var tweetsModel = mongoose.model('tweet');
var entity = new tweetsModel();

// entity.content="第一条动态"
// entity.user="ligeng"

// entity.save(function(err){
// 	if(err){
// 		console.log("something happen");
// 	}
// })

exports.list = function(req,res){
    var result = tweetsModel.find({},function(err,data){
    if(err){
        console.log(err);
    }else{
        res.render('tweets',{'tweets':data});
    }
})};

exports.comments = function(req,res){
    
}

exports.thumbs_up =function(req,res){
    
}