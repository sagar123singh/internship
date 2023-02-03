const express= require("express")
const mongoose= require("mongoose")
const expressSession = require('express-session');
const MemoryStore = require('memorystore')(expressSession)

const app= express()
const bodyParser= require("body-parser")
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));


app.use(expressSession({
    secret: "random",
    resave: true,
    saveUninitialized: true,
    // setting the max age to longer duration
    maxAge: 24 * 60 * 60 * 1000,
    store: new MemoryStore(),
}));

const route=require("./routes/route")

app.use("/",route)


mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://sagar123singh:lIfGpUCFqV7Q8eSz@cluster0.vffzhqi.mongodb.net/signup-login",{useNewUrlParser:true})
.then(()=>console.log("mongodb is connected"))
.catch((err)=>console.log(err))

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})