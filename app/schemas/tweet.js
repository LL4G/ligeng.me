var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var commentSchema = new Schema({
    nickname:String,
    comment:String,
    createAt:Date,
    At:{
        type:String,
        default:null
    }
});

var tweetSchema = new Schema({
    user:String,
    createAt:{type:Date,default:Date.now},
    content:String,
    comments:[commentSchema]
});

mongoose.model('tweet',tweetSchema);
