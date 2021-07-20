/**
 * @module       app
 * @file         routes.js
 * @description  it contains the http methods 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        14/06/2021  
-----------------------------------------------------------------------------------------------*/
const employeePayroll = require('../controllers/employee.js');
const helperFile = require('../middleware/helperFile.js');
const user = require('../controllers/user');

module.exports = (app) => {
    //registering user
    app.post('/registerUser', user.registerUser);

    //employee login
    app.post('/userLogin', user.userLogin);
    
    //registering a new employee
    app.post('/registerEmp', employeePayroll.registerEmp);

    //get all employees
    app.get('/readAllData', helperFile.checkToken,  employeePayroll.readAllData);

    //get employee by id
    app.get('/readDataById/:empId', helperFile.checkToken, employeePayroll.readDataById);
    
    //update employee by id
    app.put('/updateEmp/:empId',helperFile.checkToken, employeePayroll.updateEmp);

    //delete employee by id
    app.delete('/deleteEmp/:empId',helperFile.checkToken, employeePayroll.deleteEmp);
    
}