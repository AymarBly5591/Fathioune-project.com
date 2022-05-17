
const nodemailer = require('nodemailer');

function EnvoiEmail(email  , sujet , context ){

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', port: 465  ,
        auth: {
          user: "aymarbly559@gmail.com",
          pass: 'joresse1#@' },
        tls: {rejectUnauthorized: false},
      });

    var mailOptions = {
    from: 'aymarbly559@gmail.com', to: email , subject: sujet , html: context  
     };
    //  transporter
    transporter.sendMail(mailOptions, function(error, info){
          if (error) { 
            console.log("Failed send email"+error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
}


modules.export  =  {EnvoiEmail} ;