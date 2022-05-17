
const nodelmailer=require("nodemailer");
const dotenv =  require("dotenv");
dotenv.config();


async function EnvoieEmail(email , sujet , htl){

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465 ,service :"gmail",
        auth: {
            user: process.env.MAIL_USER.toString(),
            pass: process.env.MAIL_PASS.toString()
        },
        tls: {rejectUnauthorized: false},
      });

    var mailOptions = {from: process.env.MAIL_USER,to: email,subject: sujet, 
      html : htl 
    };
    
    transporter.sendMail(mailOptions, (err, info)=>{
          if (err) {
              console.log(err);
          } else {
              console.log( info.response)};
          }
    )
}



module.exports={ EnvoieEmail   } ;