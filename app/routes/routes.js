/**
 * @module       app
 * @file         routes.js
 * @description  it contains the http methods 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        14/06/2021  
-----------------------------------------------------------------------------------------------*/
const employeePayroll = require('../controllers/controller.js');

module.exports = (app) => {
    
    //registering a new employee
    app.post('/empPayroll/registerEmp', employeePayroll.registerEmp);

    //employee login
    app.post('/empPayroll/empLogin', employeePayroll.empLogin);

    //get all employees
    app.get('/empPayroll/readAllData', employeePayroll.readAllData);

    //get employee by id
    app.get('/empPayroll/readDataById/:empId', employeePayroll.readDataById);
    
    //update employee by id
    app.put('/empPayroll/updateEmp/:empId',employeePayroll.updateEmp);

    //delete employee by id
   // app.delete('/empPayroll/deleteEmp', employeePayroll.deleteEmp);
    
}