var mongoose=require('mongoose')
exports.connect=()=>{
    mongoose.connect('mongodb+srv://Yugendarsairam:Mongodb@cluster0.myxfi.mongodb.net/Bookstore?retryWrites=true&w=majority',{useUnifiedTopology:true,useNewUrlParser:true},function(error,docs){
        if(error){
            console.log(error)
        }
        if(docs){
            console.log("Connected to Database")
        }
    })
    
}