const express = require('express');
const dbConfig = require('./config/database.config.js');
//create express app 
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

/**
 * defining a simple route
 * "/" is the url 
 * message is shown once the user visits the url
 */
app.get('/',(req,res) => {
    res.json({
        "message":"Welcome to the Employee Payroll Application " //this message is shown once the user visits the url
    });
});

//Require routes
require('./app/routes/routes.js')(app);

//user can visit the url once the server is listening on port 3000
dbConfig().then(() => {
    app.listen(3000,function() {
        console.log("Server is listening on port 3000");
    });
});