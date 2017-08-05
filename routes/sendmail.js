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
                        <table>\n\
                        <tr>\n\
                        <td>Name: </td>" +  req.param('name') + "<td></td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>Email: </td><td>" + req.param('email') + "</td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>Message: </td>" + req.param('text') + "<td></td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>Newslater: </td>" + req.param('newslater') + "<td></td>\n\
                        </tr>\n\
                        </table></body></html>";
    var sendmailrevemail = "<html>\n\
                        <body>\n\
                        <h1>Thank you for your query</h1>\n\\n\
                        <h6>We attached your query</h6>\n\
                        <table>\n\
                        <tr>\n\
                        <td>Name: </td>" +  req.param('name') + "<td></td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>Email: </td><td>" + req.param('email') + "</td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>Message: </td>" + req.param('text') + "<td></td>\n\
                        </tr>\n\
                        <tr>\n\
                        <td>Newslater: </td>" + req.param('newslater') + "<td></td>\n\
                        </tr>\n\
                        </table>\n\
                       </body></html>";

    var sender_email = req.param('email');

    let mailOptions = {
        from: 'User <username@domain.com>',
        to: 'username@domain.com',
        subject: "form request query",
        html: sendmailreq
    };

    let mailreverse = {
        from: 'victim <victim@domain.com>',
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