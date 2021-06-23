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
    app.post('/registerEmp', employeePayroll.registerEmp);

    //employee login
    app.post('/empLogin', employeePayroll.empLogin);
    
}