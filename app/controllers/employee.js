/**
 * @module       EmpPayrollController
 * @file         controller.js
 * @description  EmpPayrollController holds the API 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        14/06/2021  
-----------------------------------------------------------------------------------------------*/

const empService = require('../../services/employee.js');
const { empValidation } = require('../middleware/empValidation.js');

/**
 * @description Create and save new employee
 * @param {*} req, request sent from the http
 * @param {*} res, respond given to the http
 * @returns res
 */

class EmpPayrollController{
    registerEmp = (req,res) => {            
        try{
            const validateEmp = empValidation.validate(req.body)
            if(validateEmp.error){
                res.status(400).send({message:validateEmp.error.details[0].message})
            }

            const employeePayrollData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                department: req.body.department,
                salary: req.body.salary,
                emailId: req.body.emailId,
               
            }
            empService.createEmp(employeePayrollData, (error, data) => {
                return ((error) ?
                    res.status(400).send({
                        success: false,
                        message: "Email already exists!"
                    }) :
                
                res.send({
                    success: true,
                    message: "New employee added!!",
                    data: data
                }));
            });
        }catch(error){
            return res.status(500).send({
                success: false,
                message: error.message
            });
        }
    }    /**
     * @description logging employee in via email id and password
     * @param {*} req 
     * @param {*} res 
     */
    /**
     * @description This function will fetch the data of all the employees
     * @param {*} req 
     * @param {*} res 
     */
    readAllData = (req,res)=>{
    try{
        empService.getAllEmpData((error,data)=>{
            return((error) ? res.status(400).send({
                success: false,
                message: "Some error occured"
            }) :
            res.send({
                success: true,
                message: "Employee information retrieved successfully!",
                data: data
            }));
        });
        }catch(error){
            return res.send(500).send({
                success: false,
                message: error.message
        });
    }
}


    /**
     * @description This function will fetch employee according to the emp id
     * @param {*} req 
     * @param {*} res 
     */
    readDataById = (req,res) =>{
        try{
            var empId = req.params.empId;
            empService.getEmpDataById(empId,(error,data)=>{
                return((error)? res.status(400).send({
                    success: false,
                    message: "Some error occured"
                }) :
                res.send({
                    success: true,
                    message: "Employee information retrieved successfully!",
                    data: data
                }));
            });
        }catch(error){
            return res.send(500).send({
                success: false,
                message: error.message
            });
        }
    }


    /**
     * @description This function allows us to update employee through empId
     * @param {*} req 
     * @param {*} res 
     */
    updateEmp = (req,res) =>{
        try{
            const validateEmp = empValidation.validate(req.body);
            if(validateEmp.error){
                res.status(400).send({message:validateEmp.error.details[0].message});
            }

            let empId = req.params.empId;
            const employeePayrollData = {
                id: req.params.id,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailId: req.body.emailId,
                password: req.body.password
            }

            empService.updateEmpData(empId, employeePayrollData,(error,data)=>{
                return((error)? res.status(400).send({
                    success: false,
                    message: "Some error occured while updating the employee"
                }) :
                res.send({
                    success: true,
                    message: "Employee updated successfully!",
                    data: data
                }));
            });
        }catch(error){
            return res.status(500).send({
                success: false,
                message: error.message
            });
        }
    }



    deleteEmp = (req,res) =>{
        let empId = req.params.empId;
        empService.deleteEmpData(empId,(error,data)=>{
            return((error)?res.status(400).send({
                success:false,
                message: "Error occured while deleting employee"
            }):
            res.send({
                success: true,
                message: "Employee deleted successfully!",
                data: data
            }));
        });
    }
}

module.exports = new EmpPayrollController();


