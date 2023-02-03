const mongoose= require("mongoose")
const instructSchema=new mongoose.Schema({
step:{
    type:String,
},
photoUrl:{
    type:String,
    required:true
},
isDeleted:{
    type:Boolean,
    default:false
}
},{versionKey: false},{timestamps:true})
module.exports= mongoose.model("Instruct",instructSchema)