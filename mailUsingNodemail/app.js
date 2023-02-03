const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: "sagar1ted@gmail.com",
      pass: "mqqyzkbcaqupdryx"
    }
  });

  var mailOptions ={
    from: "sagar1ted@gmail.com",
    to: "sagar1ted@gmail.com",
    subject: "Hello",
    html:`<h1>Ted Consulting</h1>
    <a href="https://www.google.com/">click here</a>`
  };
  transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("email has been sent " + info.response)
    }
  });