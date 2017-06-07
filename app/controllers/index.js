'use strict'

/* GET home page. */
exports.home = function(req, res, next) {
  res.render('index', { title: 'ligeng.me' });
};

exports.about = function(req,res,next){
  res.render('about');
  next();
};

