const S3 = require("aws-sdk/clients/s3")
const fs= require("fs")


const s3=new S3({
    accessKeyId: "AKIAQLLQKSEOII35AEU4",
    secretAccessKey: "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",
    region:"ap-northeast-1"
})

        function uploadFile(file){
            console.log(".......12")
            console.log(file.path, ' ...file path')
    // const fileStream=fs.createReadStream(file.path)
    
    const uploadParams={
        Bucket:"daybed-resources",
        Body:file,
        Key:file.originalname,
        Body: file.buffer
    }
    console.log(uploadParams, ' ......upload params')
    return s3.upload(uploadParams).promise()
  // return s3.deleteObject(uploadParams).promise()
  return s3.delete
}

module.exports.uploadFile=uploadFile

