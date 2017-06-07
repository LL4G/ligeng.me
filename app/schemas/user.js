var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    //登录ID
    uid:String,
    //显示昵称
    username:{
        unique:true,
        type:String
    },
    password:String,
    gender:String,
    birth:Date,
    email:String,
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }
});

mongoose.model('user',userSchema);
