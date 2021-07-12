/**
 * @module       app
 * @file         routes.js
 * @description  it contains the http methods 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        14/06/2021  
-----------------------------------------------------------------------------------------------*/
const employeePayroll = require('../controllers/controller.js');
const helperFile = require('../middleware/helperFile.js');

module.exports = (app) => {
    
    //registering a new employee
    app.post('/registerEmp', employeePayroll.registerEmp);

    //employee login
    app.post('/empLogin', employeePayroll.empLogin);

    //get all employees
    app.get('/readAllData', helperFile.checkToken,  employeePayroll.readAllData);

    //get employee by id
    app.get('/readDataById/:empId', helperFile.checkToken, employeePayroll.readDataById);
    
    //update employee by id
    app.put('/updateEmp/:empId',helperFile.checkToken, employeePayroll.updateEmp);

    //delete employee by id
    app.delete('/deleteEmp/:empId',helperFile.checkToken, employeePayroll.deleteEmp);
    
}