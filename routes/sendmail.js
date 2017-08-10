'use strict';
var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'mail.domain.com',
    port: 25,
    secure: false,
    auth: {
        user: 'username@domain.com',
        pass: 'password'
    },
    tls: { rejectUnauthorized: false }
});
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

router.get('/', function (req, res, next) {

    var sendmailreq = "<html>\n\
                        <body>\n\
                        <p> Name: " +  req.param('name') + "</p>\n\
                        <p> Email: " +  req.param('email') + "</p>\n\
                        <p> Query: " +  req.param('msg') + "</p>\n\
                        <p> Newsletter: " +  req.param('newsletter') + "</p>\n\
                        </body>\n\
                        </html>";
    var sendmailrevemail = "<html>\n\
                        <body>\n\
                        <h1>Thank you for your query</h1>\n\
                        <h6>We attached your query details details</h6>\n\
                        <p> Name: " +  req.param('name') + "</p>\n\
                        <p> Email: " +  req.param('email') + "</p>\n\
                        <p> Query: " +  req.param('msg') + "</p>\n\
                        <p> Newsletter: " +  req.param('newsletter') + "</p>\n\
                       </body>\n\
                       </html>";

    var sender_email = req.param('email');

    let mailOptions = {
        from: 'User <username@domain.com>',
        to: 'username@domain.com',
        subject: "a new query arrived from " +  req.param('email') + "",
        html: sendmailreq
    };

    let mailreverse = {
        from: 'User <username@domain.com>',
        to: sender_email,
        subject: "your query on domain.com",
        html: sendmailrevemail
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });


    transporter.sendMail(mailreverse, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.send("email send")

});

module.exports = router;
