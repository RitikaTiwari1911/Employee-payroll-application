module.exports = (app) => {
    const employeePayroll = require('../controllers/controller.js');

    //Create a new employee
    app.post('/employeePayroll', employeePayroll.create);

    
}