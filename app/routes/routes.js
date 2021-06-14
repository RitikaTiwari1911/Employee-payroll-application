module.exports = (app) => {
    const empPayroll = require('../controllers/controller.js');

    //Create a new employee
    app.post('/empPayroll', empPayroll.create);

    //Retrieve all employee
    app.get('/empPayroll', empPayroll.findAll);

    //Retrieve a single employee with empId
    app.get('/empPayroll/:empId',empPayroll.findOne);

    //Update an employee with empId
    app.put('/empPayroll/:empId',empPayroll.update);

    //Delete an employee with empId
    app.delete('/empPayroll/:empId',empPayroll.delete);

}