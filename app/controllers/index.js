'use strict'

/* GET home page. */
exports.home = function(req, res, next) {
  res.render('index', { title: 'ligeng的个人网站--eat code sleep' });
};

exports.about = function(req,res,next){
  res.render('about');
  next();
};

