const userService = require('../../services/user')
const { userValidation } = require('../middleware/userValidation')

class UserController{
    registerUser = (req, res) =>{
        try{
            const validateUser = userValidation.validate(req.body)
            if(validateUser.error){
                res.status(400).send({message:validateUser.error.details[0].message})
            }
            const userData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailId: req.body.emailId,
                password: req.body.password
            }
            userService.createUser(userData, (error, data) => {
                return ((error) ?
                    res.status(400).send({
                        success: false,
                        message: "Email already exists!"
                    }) :
                
                res.send({
                    success: true,
                    message: "You are successfully registered!!",
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

    userLogin = (req,res) =>{
        try{
            console.log("controller",req.body)
            const loginInput = {
                emailId: req.body.emailId,
                password: req.body.password
            }
            userService.login(loginInput,(error,data)=>{
                return ((error) ? res.status(400).send({
                    success: false,
                    message: "Invalid credential"
                }) :
                res.send({
                    success: true,
                    message: "Login successful!",
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

}

module.exports  = new UserController();
