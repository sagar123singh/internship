const express=require('express')
const router= express.Router()

const {create,getData,updateData,deleteData}= require("../controller/controller")

router.post("/create",create)
router.get("/getData",getData)
router.put("/updateData",updateData)
//router.delete("/deleteData",deleteData)


const aws = require('aws-sdk')
aws.config.update({
    accessKeyId: "AKIAQLLQKSEOII35AEU4",
    secretAccessKey: "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",
    region:"ap-northeast-1"

});
const BUCKET = "daybed-resources";
const s3 = new aws.S3();


router.delete("/delete/:filename", async (req, res) => {
    const filename = req.params.filename
    await s3.deleteObject({ Bucket: BUCKET, Key: filename }).promise();
    res.send("File Deleted Successfully")
})


module.exports= router;

