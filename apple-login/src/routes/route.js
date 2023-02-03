const express= require("express")
const router= express.Router()
const appleSignin=require("apple-signin-auth")


const options = {
  clientID: 'com.daybed.tenant', 
  redirectUri: 'https://daybed.io/owner/auth/apple/callback',
  state: 'state',
  responseMode: 'form_post', 
  scope: 'email' 
};
router.get("/",async(req,res)=>{
  const authorizationUrl = await appleSignin.getAuthorizationUrl(options);
  res.json({data:authorizationUrl})
})
module.exports=router
