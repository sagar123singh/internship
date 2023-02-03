const userModel= require("../model/userModel")
const bcrypt= require("bcrypt")

const signUp=async(req,res)=>{
    try{
        const body=req.body
        /////////////////////////////validations////////////////////////////////////
    const requiredField=["firstName","lastName","email","phone","password"]
    for(i=0;i<requiredField.length;i++){
        if(body[requiredField[i]]===undefined){
            res.status(400).json({status:false,msg:`${requiredField[i]} is required`})
        }else if(body[requiredField[i]]===null || body[requiredField[i]]===" "){
            res.status(400).json({status:false,msg:`please enter ${requiredField[i]}`})
        }
    }

     if (!(/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/).test(body.email.trim())) {
     return res.status(400).json({ status: false, message: 'Enter a valid Email Id' });
     }

     const repeatedEmail= await userModel.findOne({email:body.email})
     if(repeatedEmail){
        return res.status(400).json({status:false,msg:"Account already registered with this"})
     }



     if (!(/^[6789]\d{9}$/).test(body.phone)) {
        return res.status(400).json({ status: false, message: 'The mobile number must be 10 digits and should be only Indian number' });
    }

    if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(body.password)){
        return res.status(400).json({status:false,message:"please enter alphanumeric and lowercase password"})
    }
    if (!(body.password.length > 8 && body.password.length <= 15)) {
        return res.status(400).json({status: false,message: 'Minimum password should be 8 and maximum will be 15'});
    }
     const repeatedPhone= await userModel.findOne({phone:body.phone})
     if(repeatedPhone){
        return res.status(400).json({status:false,msg:"mobile exists, please enter a different number"})
     }
     //console.log(body);
     body.password = bcrypt.hashSync(body.password, 10);
    
     console.log(body);
    //////////////////////////////////data registered/////////////////////////
     const registerData= await userModel.create(body)
    res.status(201).json({status:true,msg:"registered successfully",data:registerData})    
    }catch(err){
        res.status(500).json({status:false,msg:err.msg})
    }
};
module.exports.signUp= signUp


