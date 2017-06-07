'use strict'

var mongoose = require('mongoose');
    require('../schemas/article');

var articleModel = mongoose.model('article');

var entity = new articleModel();

// entity.title = "我的第一篇博客";
// entity.content = "这是我的第一篇博客";
// entity.save(function(err){
//     if(err){
//         console.log('something error');
//     }
// })

exports.index = function(req,res){
    var reuslt = articleModel.find({},null,{sort:{'create_at':-1}},function(err,data){
        if(err){
            console.log('something error');
        }
        console.log(articleModel.count({},function(err,count){
            console.log(count);
        }))
        res.render('article_list',{'articles':data,'totalPage':10});
    })
}

//显示某篇文章
exports.show = function(req,res){
    var aid=req.params.aid;
    articleModel.update({_id:aid},{$inc:{pageview:1}},function(err){
        console.log(err);
    })
    articleModel.findById(aid,function(err,article){
        res.render('article_detail',{article:article});
    });
}

//写某篇文章
exports.write = function(req,res){
    res.render('article_enter');
}

exports.enter = function(req,res){
    var title = req.body.title;
    var content = req.body.content;
    var doc = {title:title,content:content};
    entity = new articleModel(doc);
    entity.save(function(err){
        if(err){
            console.log(err);
        }
    })
    res.render('article_enter');
}