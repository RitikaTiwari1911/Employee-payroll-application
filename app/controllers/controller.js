const EmployeePayroll = require('../models/model.js');

//Create and save a new employee
exports.create = (req,res) => {

    //Validate request
    if(!req.body){
        return res.status(400).send({
            message: "Employee cannot be empty"
        });
    }

    //Create a employee
    const employeePayroll = new EmployeePayroll({
        firstName: req.body.firstName || "Untitled Employee",
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: req.body.password
    });

    //Save employee in the database
    employeePayroll.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while making the Employee"
            });
        });
};

//Retrieve and return all employees from the database
exports.findAll = (req,res) => {
    EmployeePayroll.find()
    .then(employeePayroll => {
        res.send(employeePayroll);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving employees"
        });
    });
};

//Find a single note with a EmpId
exports.findOne = (req,res) => {
    EmployeePayroll.findById(req.params.empId)
    .then(employeePayroll => {
        if(!employeePayroll){
            return res.status(404).send({
                message: "Employee not found with id" +req.params.empId
            });
        }
        res.send(employeePayroll);
    }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Employee not found with id" +req.params.empId
            });
        }
        return res.status(500).send({
            message:  "Error retrieving employee with id" +req.params.empId
        });
    });
};

//Update a note identified by empId in the request
exports.update = (req, res) =>  {
    //Validate request
    if(!req.body){
        return res.status(400).send({
            message: "Employee cannot be empty"
        });
    }

    //Find employee and update it with the request body
    EmployeePayroll.findByIdAndUpdate(req.params.empId,{
        firstName: req.body.firstName || "Untitled Employee",
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: req.body.password
    }, {new: true})
    .then(employeePayroll => {
        if(!employeePayroll){
            return res.status(404).send({
                message: "Employee not found wwith this id" +req.params.empId
            });
        }
        res.send(employeePayroll);
    }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Employee not found with id" +req.params.empId
            });
        }
        return res.status(500).send({
            message:  "Error updating employee with id" +req.params.empId
        });
    });
};

//Delete an employee with the specified empId in the request
exports.delete = (req,res) => {
    EmployeePayroll.findByIdAndRemove(req.params.empId)
    .then(employeePayroll => {
        if(!employeePayroll){
            return res.status(404).send({
                message: "employee not found with id" +req.params.empId
            });
        }
        res.send({message: "Employee deleted successfully!!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound'){
            return res.status(404).send({
                message: "Employee not found with id" +req.params.empId
            });
        }
        return res.status(500).send({
            message: "Could not delete employee with id " +req.params.empId
        });
    });
    
};
