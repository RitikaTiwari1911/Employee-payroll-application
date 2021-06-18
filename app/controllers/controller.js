const EmpService = require('../../services/service.js');
const { empValidation } = require('../validation/empValidation.js')

/**
 * @description Create and save new employee
 * @param {*} req, request sent from the http
 * @param {*} res, respond given to the http
 * @returns res
 */

class EmpPayrollController{
    registerEmp = (req,res) => {
    
        const employeePayrollData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailId: req.body.emailId,
            password: req.body.password
        }

        const empResponse = {
        }

        EmpService.createEmp(employeePayrollData, (error, data) => {
            return ((error) ?
                res.status(400).send({
                    success: false,
                    message: "Some error occured while creating employee"
                }) :
            
            res.send({
                success: true,
                message: "New employee added!!",
                data: empResponse.data = data
            }));
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

