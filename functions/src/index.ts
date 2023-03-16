import functions = require('firebase-functions');
// import { Transport } from 'nodemailer';
import nodemailer = require('nodemailer');
import SMTPTransport = require('nodemailer/lib/smtp-transport');

const connection = {
    host: "smtp.gmail.com",
    port: 465,

}

const transporter = nodemailer.createTransport({
        host: connection.host ,
        port: connection.port,
        secure: true,
        // service: 'gmail',
        auth : {
            user : 'rrvigneshkumar2002@gmail.com',
            password: '####',
            ssl: true
        }
    } as SMTPTransport.Options
)

exports.sendEmail = functions.firestore.document('users/{data}').onCreate((snap,context) => {
    console.log(snap.data().email);
    let message = "From :"+ snap.data().email + 
        "<br/> Name :"+ snap.data().name ;
    message += "<br/> Subject :"+ snap.data().subject;
    message += "<br/> Message :"+ snap.data().message;

    const mailOptions = {
        from : 'rrvigneshkumar2002@gmail.com',
        to : 'rvkvigneshkumar02@gmail.com',
        subject: snap.data().subject,
        html : message

    };

    return transporter.sendMail(
        mailOptions ,
        (error : any , data : any) => {
            if(error) {
                console.log("Inside error block" + error)
            }
            console.log("Email sent!")
        }
    )
})

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
