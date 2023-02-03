const mongoose= require("mongoose")
const featureSchema=new mongoose.Schema({
        name:{
            type:String,
            required:true,
            trim:true
        },
        isAccess:{
            type:Boolean,
            default:false
        },
        isdeleted:{
            type:Boolean,
            default:false
        }
    })
    module.exports=mongoose.model('Feature',featureSchema)