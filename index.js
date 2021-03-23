var express=require('express')
var cors=require('cors')
var app=express()
var db=require('./config/db.config')
var server=require('./config/app.config')

var data=require('./Routes/user.route')

db.connect()


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use('/user',data)



app.listen(server.config.PORT,function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Server is On")
    }
})