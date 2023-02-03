const model=require("../model/intructModel")
const aws= require("../aws/aws")
require("dotenv").config()
/////********************************************************Redis Connection************************************************* */
///*****************************All follow this version of redis    "redis": "^3.1.2",**************************************** */
const redis = require("redis");
const { promisify } = require("util");

//Connect to redis
const redisClient = redis.createClient(
    process.env.REDIS_PORT,
    process.env.REDIS_HOST,
    { no_ready_check: true }
);
redisClient.auth(process.env.REDIS_PASS, function (err) {
    if (err) throw err;
});

redisClient.on("connect", async function () {

    console.log("Connected to Redis..");
});

//1. connect to the server
//2. use the commands :

//Connection setup for redis

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);
///////////////////////////////////////////////////////////////////////////////////////////////////


const create=async(req,res)=>{
    try{
        const body= req.body
        
          console.log(body);
         const file= req.files
         console.log(file, "file ");
         const profile_url = await aws.uploadFile(file[0]);
         console.log(profile_url, ' .....profile')
         body.profileImage = profile_url
        console.log(body, ' ....body')
        const response=await model.create({step: body.step, photoUrl: profile_url.Location})
        res.status(201).json({status:true,data:response,msg:"successfully created"})
    }catch(err){
        console.log(err, ' ..eeror')
        res.status(500).json({status:false,msg:err.msg})
    }
};
module.exports.create=create

const getData= async function(req,res){
    try{
        let check = await GET_ASYNC('reply');
        if(check) {
            let response = JSON.parse(check);
            console.log("from cache");
            return res.status(302).json(response)
        }

      const  fetchData= await model.find()
      if(fetchData) {
        await SET_ASYNC('reply', JSON.stringify(fetchData),'EX',10);
        console.log("from mongoDB");
      }

      if(!fetchData){
        res.json({status:false,msg:"data not found"})
        }else{
     // console.log(fetchData)
        res.send({status:true,data:fetchData,msg:"data fetched successfully"} )
        }
    }catch(err){
        res.status(500).json({status:false,msg:"server errr"})
        console.log(err,'errrrrrr');
    }
}
module.exports.getData=getData


const updateData=async(req,res)=>{
    const userId= req.query.userId
    const body= req.body
try{
    const file= req.files
         console.log(file, "file ");
         const profile_url = await aws.uploadFile(file[0]);
         console.log(profile_url, ' .....profile')
         body.profileImage = profile_url
        console.log(body, ' ....body')
    const finddata= await model.findById(userId)
    if(!finddata){
    res.json({status:false,msg:"data not found"})
    }else{
    const response=await model.findByIdAndUpdate(userId,{step: body.step, photoUrl: profile_url.Location},{upsert:true})
    console.log(response);
    res.json({status:true,data:response,msg :"updated successfully"})
    }
}catch(err){
    console.log(err,"update errrr.........");
    res.json({status:false,msg:err.msg,data:{}})
}
}
module.exports.updateData=updateData


// const deleteData=async(req,res)=>{
//     const userId= req.query.userId
// try{
//     const finddata= await model.findById(userId)
//     if(!finddata){
//     res.json({status:false,msg:"data not found"})
//     }else{
//     const response=await model.findByIdAndUpdate(userId,{isDeleted:true},{new:true})
//     res.json({status:true,data:response,msg :"deleted successfully"})
    
//     }
// }catch(err){
//     res.json({status:false,msg:err.msg,data:{}})
// }
// }
//module.exports.deleteData=deleteData