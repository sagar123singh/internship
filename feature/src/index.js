const express= require("express")
const mongoose= require("mongoose")
const route=require("./route/route")

const app= express()
const bodyParser= require("body-parser")
app.use(bodyParser.json())


app.use("/",route)

mongoose.connect("mongodb+srv://sagar123singh:lIfGpUCFqV7Q8eSz@cluster0.vffzhqi.mongodb.net/features",{useNewUrlParser:true})
.then(()=>console.log("mongodb is connected"))
.catch((err)=>console.log(err))

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})