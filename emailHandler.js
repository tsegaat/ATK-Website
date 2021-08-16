const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const dotenv = require('dotenv')
dotenv.config()

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASS
    }
});

const emailHandler = (HTMLpath, toEmail='tsega207@gmail.com', dynamicValues={}, cb) => {
    var readHTMLFile = function(path, callback) {
        fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
            if (err) {
                throw err;
                callback(err);
            }
            else {
                callback(null, html);
            }
        });
    };

    readHTMLFile(HTMLpath, function(err, html) {
        var template = handlebars.compile(html);
        var replacements = dynamicValues
        var htmlToSend= template(replacements);

        console.log(htmlToSend)
        var mailOptions = {
            from: 'jb102493@gmail.com',
            to: toEmail,
            subject: 'ATK contact',
            html: htmlToSend ,
            // text: `Request from ${data.Email} name of the requester is ${data.Name} the subject is ${data.Subject} the comment is ${data.Comment}`
        };
    
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                cb()
            }
        });

    });
}

module.exports = emailHandler