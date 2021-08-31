const express = require('express');
const emailHandler = require("./emailHandler")
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config()
const cloudinary = require("cloudinary")

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'atk-fe/build')))

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// View engine setup
app.set('view engine', 'ejs');
app.use(bodyParser.json()); 
app.use(express.urlencoded({
    extend: false
}));
app.use(express.json())


app.post('/contact', function(req, res) {
    var data = req.body;  

    // This email is for the main admin informing him/her about the contact
    emailHandler(HTMLpath='./views/emailTemplateAdmin.html', toEmail=process.env.ADMIN_EMAIL, dynamicValues=data, cb=res.render("success"))   

    // This email is for the client informing him/her that we got the email
    emailHandler(HTMLpath='./views/emailTemplateClient.html', toEmail=data.Email, dynamicValues=data, cb=res.render("success"))
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/atk-fe/build/index.html'))
});

const listeningPORT = process.env.PORT

app.listen(listeningPORT);