const express= require("express")
const bodyParser= require("body-parser")
const mongoose= require("mongoose")
const app= express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const route= require("./routes/route")
app.use("/",route)


mongoose.connect("mongodb+srv://sagar123singh:lIfGpUCFqV7Q8eSz@cluster0.vffzhqi.mongodb.net/redis",{useNewUrlParser:true})
.then(()=>console.log("MongoDb connected"))
.catch(err=>console.log(err))
app.listen(3000 || process.env.PORT,()=>console.log("live on 3000 port"))
