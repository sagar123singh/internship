const express= require("express")
const app= express()
const PORT= process.env.PORT
const mongoose= require("mongoose")

const bodyParser= require("body-parser")
app.use(bodyParser.json())

const userRoute= require("./routes/user")
const { urlencoded } = require("body-parser")
app.use(express.json())


app.use(urlencoded({extended:false}))

app.use("/user",userRoute)

mongoose.connect("mongodb+srv://sagar123singh:lIfGpUCFqV7Q8eSz@cluster0.vffzhqi.mongodb.net/email-verification",{useNewUrlParser:true})
.then(()=>console.log("mongodb is connected"))
.catch((err)=>console.log(err))

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})