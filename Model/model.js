var mongoose=require('mongoose')
var schema=mongoose.Schema
var UserSchema=new schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})
module.exports=mongoose.model('user',UserSchema)