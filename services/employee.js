/**
 * @module       empService
 * @file         service.js
 * @description  EmployeeService class holds the callback method for controller 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        14/06/2021  
-----------------------------------------------------------------------------------------------*/
const empModel = require('../app/models/employee');
const helper = require('../app/middleware/helperFile');

class empService{
    /**
     * @description this registers the employees
     * @param {*} empData 
     * @param {*} callback 
     */
    createEmp = (empData, callback) => {
        try{
            empModel.create(empData, (error, data) => {
                    return error? callback(error, null) : callback(null, data)    
            })
        }catch(error){
            return callback(error,null);
        }
    }

    /**
     * @description this function let the employees login into their registered accounts
     * @param {*} loginInput 
     * @param {*} callback 
     */
    login = (loginInput, callback) =>{
        try{
            empModel.login(loginInput,(error, data) =>{
                if(helper.checkByBcrypt(loginInput.password,data.password)){
                    const token = helper.generateToken({loginInput})
                    return (!token)? callback("Incorrect password! Please provide the correct password",null) : callback(null, token);  
                }
                else if (error){
                    callback(error, null);
                }
            })
        }catch(error){
            return callback(error,null);
        }
    }

    /**
     * @description This function will fetch data from the database
     * @param {*} callback 
     */
    getAllEmpData = (callback) =>{
        try{
            empModel.findAll((error, data)=>{
                return ((error)? callback(error,null): callback(null,data));
            });
        }catch(error){
            return callback(error,null);
        }
    }

    /**
     * @description finding a single employee
     * @param {*} empData 
     * @param {*} callback 
     * @returns 
     */
    getEmpDataById = (empId, callback) =>{
        try{
            empModel.findOne(empId,(error,data)=>{
                return((error)? callback(error,null) : callback(null,data));
            });
        }catch(error){
            return callback(error,null);
        }
    }

    updateEmpData = (empId, empPayrollData, callback) =>{
        try{
            empModel.updateInfo(empId, empPayrollData, (error, data) =>{
                return((error)?callback(error,null):callback(null, data));
            });
        }catch(error){
            return callback(error,null);
        }
    }

    deleteEmpData = (empId, callback) =>{
        try{
            empModel.deleteById(empId,(error, data) =>{
                return((error)?callback(error, null):callback(null,data));
            });
        }catch(error){
            return callback(error,null);
        }
    }
}

module.exports = new empService();