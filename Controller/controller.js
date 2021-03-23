var model=require('../Model/model')
exports.registerbook=function(request,response){
    var body=request.body
    var data=new model(body)
    data.save(function(error,docs){
        if(error){
            response.send(error)
        }
        if(docs){
            response.send({status:true,messge:'Book added Successfully'})
        }
    })

}

exports.getDetails=function(request,response){
    model.find({},(error,docs)=>{
        if(error){
            response.send(error)
        }
        if(docs){
            response.send(docs)
        }
    })
}

exports.getDetailsById=function(request,response){
    var id=request.params.id
    model.findOne({id:id},(error,docs)=>{        
        if(error){
            response.send(error)
        }
        if(docs){
            response.send(docs)
        }
    })
}
exports.updateDetails=function(request,response){
    var id=request.params.id
    var body=request.body
    model.updateOne({id:id},body,(error,docs)=>{
        if(error){
            response.send(error)
        }
        if(docs){
            response.send({status:true,message:'Details Updated Successfully'})
        }
    })
}

exports.deletebook=function(request,response){
    var id=request.params.id
    model.deleteOne({id:id},(error,docs)=>{
        if(error){
            response.send(error)
        }
        if(docs){
            response.send({status:true,message:'Book Deleted Successfully'})
        }
    })
}