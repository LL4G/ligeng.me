var mongoose = require('mongoose'),
Schema = mongoose.Schema();

var tweetsModel=new Schema({
    content:String,
    user:String,
    
})