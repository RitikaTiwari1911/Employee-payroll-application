const express = require('express');
require('dotenv').config();

//create express app 
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./app/swagger/swagger.json')

//middleware has access to req and res
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
