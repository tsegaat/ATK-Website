const express = require('express');
const emailHandler = require("./emailHandler")

const app = express();
const PORT = 8000;
const bodyParser = require('body-parser');


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'atk-fe/build')))

// View engine setup
app.set('view engine', 'ejs');
app.use(bodyParser.json()); 
app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());


app.post('/email', function(req, res) {
    var data = req.body;
    console.log(data)    

    // This email is for the main admin informing him/her about the contact
    emailHandler(HTMLpath='./views/emailTemplateAdmin.html', toEmail="tsega207@gmail.com", dynamicValues=data, cb=res.render("success"))   

    // This email is for the client informing him/her that we got the email
    emailHandler(HTMLpath='./views/emailTemplateClient.html', toEmail=data.Email, dynamicValues=data, cb=res.render("success"))
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/atk-fe/build/index.html'))
});

app.listen(process.env.PORT || PORT, () => console.log('Server is starting on PORT,', PORT));