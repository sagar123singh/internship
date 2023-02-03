const express= require("express")
const app= express()
const bodyParser= require("body-parser")
const mongoose= require("mongoose")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const route=require("./route/route")
app.use("/",route)


mongoose.connect("mongodb+srv://sagar123singh:lIfGpUCFqV7Q8eSz@cluster0.vffzhqi.mongodb.net/sign-up",{useNewUrlParser:true})
.then(()=>console.log("MongoDb connected"))
.catch(err=>console.log(err))

app.listen(process.env.PORT || 3000,()=>{
console.log('Express app running on port ' + (process.env.PORT || 3000))
})
