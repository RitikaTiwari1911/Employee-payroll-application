/**
 * @module       Model
 * @file         models.js
 * @description  EmpPayrollSchema holds the database Schema 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        14/06/2021  
-----------------------------------------------------------------------------------------------*/
//connecting to the mongoDB through mongoose
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');

//schema for the manner in which the data wwill be stored in the database
const empPayrollSchema = mongoose.Schema({
    firstName: { 
        type: String,
        required: true,
        validate: /^[a-zA-Z ]{3,30}$/
    },
    lastName: {
        type: String,
        required: true,
        validate: /^[a-zA-Z ]{3,30}$/
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    
},{
    //Applying time stamp for the data
    timestamps: true
});

//module.exports = mongoose.model('EmployeePayroll',empPayrollSchema);

const registerEmp = mongoose.model('registerEmp',empPayrollSchema)

class empModel{
    /**
     * @description registering employee in the database
     * @param {*} empData 
     * @param {*} callback 
     */
    create = (empData, callback) =>{
        const empPayrollData = new registerEmp({
            firstName: empData.firstName,
            lastName: empData.lastName,
            department: empData.department,
            salary: empData.salary,
            emailId: empData.emailId,
        });
        empPayrollData.save(callback)
    };

    /**
     * @description Using find() which is a mongoose method
     * @param {*} callback 
     */
    findAll = (callback) =>{
        registerEmp.find({},(error, data) =>{
            return((error)? (callback(error, null)): (callback(null, data)));
        });
    }

    findOne = (empId, callback) =>{
        registerEmp.findById(empId,(error, data) =>{
            return((error)?(callback(error,null)): (callback(null,data)));
        });
    }

    updateInfo(empId, employeePayrollData, callback) {
        try{
            registerEmp.findByIdAndUpdate(empId,{
            firstName: employeePayrollData.firstName,
            lastName: employeePayrollData.lastName,
            emailId: employeePayrollData.emailId,
            password: employeePayrollData.password
        },(error, data)=>{
            return((error)?(callback(error,null)): callback(null,data));
        })
    }catch(error){
            return callback(null)
        }
    }

    deleteById = (empId, callback) =>{
        registerEmp.findByIdAndRemove(empId,(error, data)=>{
            return((error)? (callback(error, null)):(callback(null, data)));
        })
    }
}

module.exports = new empModel();