const nodemailer = require('nodemailer');
const email = {
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "f9b1d69060f5bd",
        pass: "6f50d5cd8c1cbe"
    }
};

const send =async (option) => {
    nodemailer.createTransport(email).sendMail(option, (err, info) => {
        if (err) {
            console.log('Error occurred while sending email:', err);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });
};

let email_data = {
    from: 'jacekim.theal@gmail.com',
    to: 'jacekim@theal.ai.kr',
    subject: 'Test Email',
    text: 'This is a test email sent using Node.js and Nodemailer.',
    html: '<h1>This is a test email sent using Node.js and Nodemailer.</h1>'
};

send(email_data);


