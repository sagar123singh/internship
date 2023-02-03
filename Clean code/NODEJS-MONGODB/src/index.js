const express= require("express")
const mongoose= require("mongoose")
const uri=require("./config/mongoURI")
const app= express()
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true},),)

app.set('view engine','ejs')
app.set('views',__dirname + '/views')


////mongodb connection
mongoose.set('strictQuery', true);
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("mongodb is connected"))
.catch((err)=>console.log(err))
const routes=require("./routes/route")
app.use("/",routes)

app.listen(3000 || process.env.PORT,()=>{console.log("live on 3000");})

