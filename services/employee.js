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