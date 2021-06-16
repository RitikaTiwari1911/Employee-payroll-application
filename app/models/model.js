/**
 * @module       Model
 * @file         models.js
 * @description  EmpPayrollSchema holds the database Schema 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        14/06/2021  
-----------------------------------------------------------------------------------------------*/
//connecting to the mongoDB through mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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


//Encrypting password
EmpPayrollSchema.pre("save",async function(next){
    //This will hash the password if the password is modified by the user in future
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

module.exports = mongoose.model('EmployeePayroll',EmpPayrollSchema);