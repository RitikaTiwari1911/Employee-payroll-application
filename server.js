const express = require('express');

//create express app 
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

//Connecting the database
mongoose.connect(dbConfig.url,{
    useNewUrlParser: true
}).then(()=>{
    console.log("Succesfully connected to the database");
}).catch(err =>{
    console.log('Could not connect to the database. Exiting now...',err);
    process.exit();
});

//defining a simple route
app.get('/',(req,res) => {
    res.json({
        "message":"Welcome to the Employee Payroll Application "
    });
});

//Require routes
require('./app/routes/routes.js')(app);

//listen for requests
app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});