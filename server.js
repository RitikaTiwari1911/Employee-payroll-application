const express = require('express');
const dbConfig = require('./config/database.config.js');
//create express app 
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//defining a simple route
app.get('/',(req,res) => {
    res.json({
        "message":"Welcome to the Employee Payroll Application "
    });
});

//Require routes
require('./app/routes/routes.js')(app);

//listen for requests
dbConfig().then(() => {
    app.listen(3000,function() {
        console.log("Server is listening on port 3000");
    });
});