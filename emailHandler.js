const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const dotenv = require('dotenv')
dotenv.config()

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.TRANSPORTER_EMAIL,
      pass: process.env.TRANSPORTER_PASS
    }
});

const emailHandler = (HTMLpath, toEmail=process.env.ADMIN_EMAIL, dynamicValues={}, cb) => {
    var readHTMLFile = function(path, callback) {
        fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
            if (err) {
                throw err;
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

        console.log(replacements)
        var mailOptions = {
            from: process.env.TRANSPORTER_EMAIL,
            to: toEmail,
            subject: 'ATK contact',
            html: htmlToSend ,
        };
    
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                cb()
            }
        });

    });
}

module.exports = emailHandler