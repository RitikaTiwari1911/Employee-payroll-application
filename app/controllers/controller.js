/**
 * @module       EmpPayrollController
 * @file         controller.js
 * @description  EmpPayrollController holds the API 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        14/06/2021  
-----------------------------------------------------------------------------------------------*/

const EmpService = require('../../services/service.js');
const { empValidation } = require('../middleware/empValidation.js')

/**
 * @description Create and save new employee
 * @param {*} req, request sent from the http
 * @param {*} res, respond given to the http
 * @returns res
 */

class EmpPayrollController{
    //Validating user input
    registerEmp = (req,res) => {
        const validateEmp = empValidation.validate(req.body)
        if(validateEmp.error){
            res.status(400).send({message:validateEmp.error.details[0].message})
        }

        const employeePayrollData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailId: req.body.emailId,
            password: req.body.password
        }

        const empResponse = {
        }

        EmpService.createEmp(employeePayrollData, (error, data) => {
            /**
             * Checking if the user already exists
             */
            return ((error) ?
                res.status(500).send({
                    success: false,
                    message: "Email already exists!"
                }) :
            
            res.send({
                success: true,
                message: "New employee added!!",
                data: empResponse.data = data
            }));
        });
    }

    /**
     * @description logging employee in via email id and password
     * @param {*} req 
     * @param {*} res 
     */
    empLogin = (req,res) =>{
        const loginInput = {
            emailId: req.body.emailId,
            password: req.body.password
        }

        EmpService.login(loginInput,(error,data)=>{
            return ((error) ?
            res.status(200).send({
                success: false,
                message: "Invalid credential"
            }) :
            res.send({
                success: true,
                message: "Login successful!",
                data: data
            }));
        });
    }
}

module.exports = new EmpPayrollController();



       
