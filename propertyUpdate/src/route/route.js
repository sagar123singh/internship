const express= require("express")
const router= express.Router()

//const propertyModel= require("../models/propertyModel")
// router.post("/propertyUpdate",async(req,res)=>{
//     try{
//         const body= req.body
//         const {propertyCTN,thisProperty,unitNumber,bedroom,parkingSpace,propertyDescriptions,parkingAvailableType}=body
//          userId=body._id
//         const checkout=await propertyModel.findOne({userId:body._id})
//             if(checkout){
//                let updateProperty=await propertyModel.findOneAndUpdate({userId:body._id},body,{new:true})
//                res.status(200).json({status:true,msg:"property details updated successfully",data:updateProperty})
//             }else if(!checkout){
        
//         const resp= await propertyModel.create(body)
//         res.status(201).json({status:true,msg:"property Details inserted successfully",data:resp})
//             } 

//     }catch(err){
//         console.log(err,"errr.................");
//         res.status(500).json({status:false,msg:err.msg})
//     }
// })




// router.post("/propertyUpdate",async(req,res)=>{
//     try{
//     const body= req.body
//     const {doYouownOrLeaseProperty,unitNumber,floorLevel,streetaddress,city,postcode,PropertyType,bedrooms,bathrooms,parkingSpace,areaSquareMTRs,propertyDataDescription,parkingAvailability,dogAccept,catAccept,onsitePropertyManagement,floorPlan,unitAlreadyFurnished,bed1Size,bed2Size,accomodationOffer,kingRoomA,queenRoomB}=body
//     userId=body._id
//     const checkout=await propertyModel.findOne({userId:body._id})?(res.status(200).json({status:true,msg:"property details updated successfully",data:await propertyModel.findOneAndUpdate({userId:body._id},body,{new:true})})):
//     (res.status(201).json({status:true,msg:"property Details inserted successfully",data:await propertyModel.create(body)}))
//     }catch(err){
//     console.log(err,"errr.................");
//     res.status(500).json({status:false,msg:err.msg})
//     }
// })


const propertySchema= require("../models/propertyModel")

router.post("/propertyUpdate",async(req,res)=>{
    try{
        const body= req.body
        console.log(body);
        const { ...propertyDetails } = body;
         userId=body._id
        const checkout=await propertySchema.findOne({propertyId:body._id})
            if(checkout){
               let updateProperty=await propertySchema.findOneAndUpdate({propertyId:body._id},body,{new:true})
               res.status(200).json({status:true,msg:"property details updated successfully",data:updateProperty})
            }else if(!checkout){
        
        const resp= await propertySchema.create(body)
        res.status(201).json({status:true,msg:"property Details inserted successfully",data:resp})
            } 

    }catch(err){
        console.log(err,"errr.................");
        res.status(500).json({status:false,msg:err.msg})
    }
})



module.exports=router
