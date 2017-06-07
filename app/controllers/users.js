'use strict'

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('../schemas/user')
var userModel = mongoose.model('user');
var entity = new userModel();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  next();
});

router.signin = function(req,res,next){
    res.render('signin');
    //这里不能用next()，如果用next被下面post的方法截断了，会报错
};

router.signup = function(req,res,next){
    res.render("signup");
}

router.post.signin = function(req,res,next){
    console.log(req.session.id+'验证')
    // var user = {username:'1234',password:'11aaa'};
    // entity = new userModel(user);
    // entity.save({})
    userModel.find({username:req.body.username},function(err,data){
        if(data[0].password == req.body.password){
            res.render("index");
            console.log('密码正确');
        }else{
            res.write('密码错误');
            res.end();
            console.log('密码错误');
        }
    })

}

router.post.signup = function(req,res,next){
    var user = {username:req.body.username,password:req.body.password,uid:"hhh"};
    var entity = new userModel(user);
    entity.save(function(err){
        if(err){
            console.log(err);
        }
    });
    res.write("注册成功");
    res.end();
}

module.exports = router;
