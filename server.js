const express = require('express');

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

//listen for requests
app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});