const express = require('express');
require('dotenv').config();
//create express app 
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//configuring the database
const dbConnect = require('./config/database.config');
dbConnect();

//Require routes
require('./app/routes/routes.js')(app);

//defining a simple route
app.get('/',(req,res) => {
    res.json({
        "message":"Welcome to the Employee Payroll Application " //this message is shown once the user visits the url
    });
});

//user can visit the url once the server is listening on port 
app.listen(process.env.PORT,() => {
    console.log(`Server is listening at port ${process.env.PORT}`);
});
