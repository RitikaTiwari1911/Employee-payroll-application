const EmpPayrollModel = require('../app/models/model.js');

/**
 * @module       EmpService
 * @file         service.js
 * @description  EmployeeService class holds the callback method for controller 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        14/06/2021  
-----------------------------------------------------------------------------------------------*/

class EmpService{
    /**
     * @description this create employee login
     * @param {*} empData 
     * @param {*} callback 
     */
    createEmp = (empData, callback) => {
        EmpPayrollModel.create(empData, (error, data) => {
                return error? callback(error, null) : callback(null, data)    
        })
    }

    login = (loginInput, callback) =>{
        EmpPayrollModel.login(loginInput,(error, data) =>{
            return error ?  callback(error, null): callback(null, data)
        })
    }
}

module.exports = new EmpService();
