const express= require("express")
const bodyParser= require("body-parser")
const app= express()
app.use(bodyParser.json())
const Router= require("./routes/route")
app.use("/",Router)


app.listen(4000,()=>{
    console.log("server running on port 4000");
})