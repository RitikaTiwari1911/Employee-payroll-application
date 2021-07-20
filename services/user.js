const userModel = require('../app/models/user')
const helper = require('../app/middleware/helperFile')

class userService{
    createUser = (userData, callback) =>{
        try{
            userModel.create(userData, (error, data) => {
                    return error? callback(error, null) : callback(null, data)    
            })
        }catch(error){
            return callback(error,null);
        }
    }

    /**
     * @description this function let the employees login into their registered accounts
     * @param {*} loginInput 
     * @param {*} callback 
     */
     login = (loginInput, callback) =>{
        try{
            userModel.login(loginInput,(error, data) =>{
                if(helper.checkByBcrypt(loginInput.password,data.password)){
                    const token = helper.generateToken({loginInput})
                    return (!token)? callback("Incorrect password! Please provide the correct password",null) : callback(null, token);  
                }
                else if (error){
                    callback(error, null);
                }
            })
        }catch(error){
            return callback(error,null);
        }
    }
}

module.exports = new userService();