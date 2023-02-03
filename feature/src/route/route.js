const express= require("express")
const path= require("path")
const Downloader= require("nodejs-file-downloader")
const { find } = require("../model/featureModel")
const router= express.Router()
const featureModel= require("../model/featureModel")

router.post("/createFeature", async(req,res)=>{
    try{
    const body= req.body
    const name= body.name
    
    if(!(name)){
        return res.status(400).send({status: false,message: 'please insert in the field name ' });
    }

    if (name===undefined || name.trim() == '') {
        return res.status(400).send({status: false,message: 'name field is required ' });
    }


    //console.log(body);
    const response= await featureModel.create(body)
    console.log(response);
    res.status(201).send({status:true,data:response})
    }catch(err){
           return res.status(500).send({status:false,msg:err.message})
    }
})

router.get("/getData",async(req,res)=>{
    const fetch=await featureModel.find()
    res.status(200).json({status:true,data:fetch})
})

router.get("/download",async(req,res)=>{
    const downloader= new Downloader({
        url: "http://localhost:3000/getData", 
        directory: "./downloads", 
    })
    try {
        const {filePath,downloadStatus} = await downloader.download(); 
        console.log("All done");
      } catch (error) {
        console.log("Download failed", error);
      }
})

router.put("/updateFeature",async(req,res)=>{
        const userId= req.query.userId
        const body= req.body
    try{

        const finddata= await featureModel.findById(userId)
        if(!finddata){
        res.json({status:false,msg:"data not found"})
        }else if(!finddata.isdeleted==false){
            res.json({status:false,msg:"data already deleted"})
        }else{
        const response=await featureModel.findByIdAndUpdate(userId,body,{new:true})
        res.json({status:true,data:response,msg :"updated successfully"})
        }
    }catch(err){
        res.json({status:false,msg:err.msg,data:{}})
    }
})

router.delete("/deleteFeature",async(req,res)=>{
        const userId= req.query.userId
        const body= req.body
    try{
        const finddata= await featureModel.findById(userId)
        if(!finddata){
        res.json({status:false,msg:"data not found"})
        }else if(!finddata.isdeleted==false){
            res.json({status:false,msg:"data already deleted"})
        }else{
        const response=await featureModel.findByIdAndUpdate(userId,{isdeleted:true},{new:true})
        res.json({status:true,data:response,msg :"deleted successfully"})
        
        }
    }catch(err){
        res.json({status:false,msg:err.msg,data:{}})
    }
})
module.exports= router