module.exports = (app) => {
    const employeePayroll = require('../controllers/controller.js');

    //Create a new employee
    app.post('/employeePayroll', employeePayroll.create);

    //Retrieve all employee
    //app.get('/employeePayroll', employeePayroll.findAll);
//
   // //Retrieve a single employee with empId
   // app.get('/employeePayroll/:empId',employeePayroll.findOne);
//
    //Update an employee with empId
   // app.put('/employeePayroll/:empId',employeePayroll.update);
//
   // //Delete an employee with empId
   // app.delete('/employeePayroll/:empId',employeePayroll.delete);

}