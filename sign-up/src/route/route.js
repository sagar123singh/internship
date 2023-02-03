const { application } = require("express")
const express= require("express")
const router= express.Router()
const {signUp}= require("../controller/userController")
router.post("/create",signUp)
module.exports = router