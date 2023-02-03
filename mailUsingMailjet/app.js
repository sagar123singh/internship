
//  const mailjet = require("node-mailjet").apiConnect("5b1d827b0703e12cbd90747288375a42","6b32c95ab2b9af29f5e6bbebd757c21b");
// //   ({apiKey: "5b1d827b0703e12cbd90747288375a42",
// //     apiSecret: "6b32c95ab2b9af29f5e6bbebd757c21b"})
// //****************************************************************************************************************** */
//  let Messages= 
//     {
//       From: {Email: "s9813558351@gmail.com",Name: "sagar singh solanki",},
//       To: [{Email: "sagar1ted@gmail.com"},
//       ],
//       Subject: "greeting",TextPart: "good morning ",HTMLPart: "<h3>SAGAR SINGH SOLANKI</h3>"}

// //********************************************************************************************************************* */
// const request = mailjet.post("send", {'version': 'v3.1'}).request({"Messages":Messages})
// request.then((result) => {console.log(result.body)})
//   .catch((err) => {console.log(err.statusCode)})

  const mailjet = require ('node-mailjet')
  .connect('5b1d827b0703e12cbd90747288375a42', '6b32c95ab2b9af29f5e6bbebd757c21b')
  
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "s9813558351@gmail.com",
        "Name": "Sagar"
      },
      "To": [
        {
          "Email": "sagar1ted@gmail.com",
          "Name": "Sagar Singh Solanki"
        }
      ],
      "Subject": "Greeting",
      "TextPart": "My first email",
      "HTMLPart": "<h3>good afternoon</h3>",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

