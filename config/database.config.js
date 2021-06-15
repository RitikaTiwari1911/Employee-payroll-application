const mongoose = require("mongoose");

module.exports = () => {

    const url = 'mongodb://localhost:27017/employee-payroll-app';

    // connecting database
    mongoose.Promise = global.Promise;

    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(error => {
        console.log("Error, Connection establishment failed", error);
        process.exit();
    });
} 

