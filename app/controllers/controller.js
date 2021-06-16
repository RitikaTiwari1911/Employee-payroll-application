const EmpService = require('../../services/service.js');

/**
 * @description Create and save new employee
 * @param {*} req, request sent from the http
 * @param {*} res, respond given to the http
 * @returns res
 */

class EmpPayrollController{
    create = (req,res) => {
    
        const employeePayrollData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailId: req.body.emailId,
            password: req.body.password
        }

        const empResponse = {
        }

        EmpService.createEmp(employeePayrollData, (error, data) => {
            if(error){
                return res.status(500).send({
                    success: empResponse.success = false,
                    message: empResponse.message = "Some error occured while creating employee"
                })
            }

            res.send({
                success: empResponse.success = true,
                message: empResponse.message = "New employee added!!",
                data: empResponse.data = data
            })
        });
    }

   
   
    /*findAll(req,res) {
        const empResponse = {}
        EmpService.findAll((error,data)=>{
            if(error){
                return res.status(500).send({
                    success: empResponse.success = false,
                    message: empResponse.message = "Some error occured while retrieving employee"
                })
            }

            res.send({
   
                success: empResponse.success = true,
                message: empResponse.message = "Retrieved all employees!!",
                data: empResponse.data = data
            })
        });
    }


    update = (req,res) => {
    
        const employeePayrollData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailId: req.body.emailId,
            password: req.body.password
        }

        const empResponse = {
        }

        EmpService.updateEmp(employeePayrollData, (error, data) => {
            if(error){
                return res.status(500).send({
                    success: empResponse.success = false,
                    message: empResponse.message = "Some error occured while creating employee"
                })
            }

            res.send({
                success: empResponse.success = true,
                message: empResponse.message = "New employee added!!",
                data: empResponse.data = data
            })
        });
    }*/
}


module.exports = new EmpPayrollController();



        /*employeePayroll.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occured while making the Employee"
                });
            });
};*/

//
///**
// * @description Find all the employees present in the database 
// * @param {*} req, request sent from the http
// * @param {*} res, respond given to the http
// */
//exports.findAll = (req,res) => {
//    EmployeePayroll.find()
//    .then(employeePayroll => {
//        res.send(employeePayroll);
//    }).catch(err => {
//        res.status(500).send({
//            message: err.message || "Some error occured while retrieving employees"
//        });
//    });
//};
//
///**
// * @description Find a single employeee with the help of empId
// * @param {*} req, request sent from the http
// * @param {*} res, respond given to the http
// */
//exports.findOne = (req,res) => {
//    EmployeePayroll.findById(req.params.empId)
//    .then(employeePayroll => {
//        if(!employeePayroll){
//            return res.status(404).send({
//                message: "Employee not found with id" +req.params.empId
//            });
//        }
//        res.send(employeePayroll);
//    }).catch(err => {
//        if(err.kind === 'ObjectId'){
//            return res.status(404).send({
//                message: "Employee not found with id" +req.params.empId
//            });
//        }
//        return res.status(500).send({
//            message:  "Error retrieving employee with id" +req.params.empId
//        });
//    });
//};
//
///**
// * @description Updating the employee record wwith the help of the empId
// * @param {*} req, request sent from the http
// * @param {*} res, respond given to the http
// * @returns res
// */
//exports.update = (req, res) =>  {
//    //Validate request
//    if(!req.body){
//        return res.status(400).send({
//            message: "Employee cannot be empty"
//        });
//    }
//
//    EmployeePayroll.findByIdAndUpdate(req.params.empId,{
//        firstName: req.body.firstName || "Untitled Employee",
//        lastName: req.body.lastName,
//        emailId: req.body.emailId,
//        password: req.body.password
//    }, {new: true})
//    .then(employeePayroll => {
//        if(!employeePayroll){
//            return res.status(404).send({
//                message: "Employee not found wwith this id" +req.params.empId
//            });
//        }
//        res.send(employeePayroll);
//    }).catch(err => {
//        if(err.kind === 'ObjectId'){
//            return res.status(404).send({
//                message: "Employee not found with id" +req.params.empId
//            });
//        }
//        return res.status(500).send({
//            message:  "Error updating employee with id" +req.params.empId
//        });
//    });
//};
//
///**
// * @description Delete the employee record with the help of empId
// * @param {*} req, request sent from the http
// * @param {*} res, respond given to the http
// */
//exports.delete = (req,res) => {
//    EmployeePayroll.findByIdAndRemove(req.params.empId)
//    .then(employeePayroll => {
//        if(!employeePayroll){
//            return res.status(404).send({
//                message: "employee not found with id" +req.params.empId
//            });
//        }
//        res.send({message: "Employee deleted successfully!!"});
//    }).catch(err => {
//        if(err.kind === 'ObjectId' || err.name === 'NotFound'){
//            return res.status(404).send({
//                message: "Employee not found with id" +req.params.empId
//            });
//        }
//        return res.status(500).send({
//            message: "Could not delete employee with id " +req.params.empId
//        });
//    });
//    
//};
//