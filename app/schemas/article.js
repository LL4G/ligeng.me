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
})

var articleSchema =new Schema({
    title:String,
    summary:String,
    tag:[String],
    pageview:{type:Number,default:0},
    create_at:{type:Date,default:Date.now},
    update_at:{type:Date,default:Date.now},
    content:String,
    comments:[
        commentSchema
    ]
})

mongoose.model('article',articleSchema);
