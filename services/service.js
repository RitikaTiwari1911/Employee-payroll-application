/**
 * @module       empService
 * @file         service.js
 * @description  EmployeeService class holds the callback method for controller 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        14/06/2021  
-----------------------------------------------------------------------------------------------*/
const empPayrollModel = require('../app/models/model');
const helper = require('../app/middleware/helperFile');

class EmpService{
    /**
     * @description this registers the employees
     * @param {*} empData 
     * @param {*} callback 
     */
    createEmp = (empData, callback) => {
        empPayrollModel.create(empData, (error, data) => {
                return error? callback(error, null) : callback(null, data)    
        })
    }

    /**
     * @description this function let the employees login into their registered accounts
     * @param {*} loginInput 
     * @param {*} callback 
     */
    login = (loginInput, callback) =>{
        
        empPayrollModel.login(loginInput,(error, data) =>{
            if (error){
                callback(error, null);
            }
            else if(helper.checkByBcrypt(loginInput.password,data.password)){
                return callback("Incorrect password! Please provide the correct password",null);
                
            }
            const token = helper.generateToken({loginInput})
            return callback(null,token);
        })
    }
}

module.exports = new EmpService();
