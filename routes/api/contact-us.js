const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "cindywhite29090@gmail.com",
      pass: "Madda2010"
    }
  });


  // const mailOptions = {
  //   from: 'cindywhite29090@gmail.com',
  //   to: 'fulakezasteven@gmail.com, carolninganga@gmail.com',
  //   subject: 'Invoices due',
  //   text: 'Dudes, we really need your money.'
  // };
  
  /*transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });*/
// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

console.log("world")
router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `
  

  var mail = {
    from: name,
    to: 'cindywhite29090@gmail.com',
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        status: 'failure to send'
      })
      console.log(err);
    } else {
      res.json({
       status: 'success! message was sent to the Foodie Team!'
      })
    }
  });
});

module.exports = router;