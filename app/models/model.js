//connecting to the mongoDB through mongoose
const mongoose = require('mongoose');

//schema for the manner in which the data wwill be stored in the database
const EmpPayrollSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    password: String
},{
    //Applying time stamp for the data
    timestamps: true
});

module.exports = mongoose.model('EmployeePayroll',EmpPayrollSchema);
