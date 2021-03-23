var express=require('express')
var router=express.Router()
var controller=require('../Controller/controller')

router.post('/registerbook',controller.registerbook)
router.get('/getdetails',controller.getDetails)
router.get('/getdetailsbyid/:id',controller.getDetailsById)
router.put('/updatedetails/:id',controller.updateDetails)
router.get('/deletebook/:id',controller.deletebook)

module.exports=router