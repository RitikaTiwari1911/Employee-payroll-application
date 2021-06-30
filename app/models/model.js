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
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},{
    //Applying time stamp for the data
    timestamps: true
});

module.exports = mongoose.model('EmployeePayroll',empPayrollSchema);


//Encrypting password
empPayrollSchema.pre("save",async function(next){
    //This will hash the password if the password is modified by the user in future
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

const registerUser = mongoose.model('registerUser',empPayrollSchema)

class empModel{
    /**
     * @description registering employee in the database
     * @param {*} empData 
     * @param {*} callback 
     */
    create = (empData, callback) =>{
        const empPayrollData = new registerUser({
            firstName: empData.firstName,
            lastName: empData.lastName,
            emailId: empData.emailId,
            password: empData.password
        });
        empPayrollData.save(callback)
    };

    /**
     * @description logging in employee 
     * @param {*} loginInput 
     * @param {*} callback 
     */
    login = (loginInput, callback) =>{
        registerUser.findOne({'emailId':loginInput.emailId},(error,data)=>{
            if(error){
                return callback(error,null);
            }else if (!data){
                return callback("Invalid credentails",null)
            }
            return callback(null, data);
        })
    }

    /**
     * @description Using find() which is a mongoose method
     * @param {*} callback 
     */
    findAll = (callback) =>{
        registerUser.find({},(error, data) =>{
            return((error)? (callback(error, null)): (callback(null, data)));
        });
    }

    findOne = (empId, callback) =>{
        registerUser.findById(empId,(error, data) =>{
            return((error)?(callback(error,null)): (callback(null,data)));
        });
    }

    updateInfo(empId, employeePayrollData, callback) {
        registerUser.findByIdAndUpdate(empId,{
            firstName: employeePayrollData.firstName,
            lastName: employeePayrollData.lastName,
            emailId: employeePayrollData.emailId,
            password: employeePayrollData.password
        },(error, data)=>{
            return((error)?(callback(error,null)): callback(null,data));
        });
    }

    deleteById = (empId, callback) =>{
        registerUser.findByIdAndRemove(empId,(error, data)=>{
            return((error)? (callback(error, null)):(callback(null, data)));
        })
    }
}


            

module.exports = new empModel();