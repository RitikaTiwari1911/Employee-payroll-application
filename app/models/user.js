const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

//schema for the manner in which the data wwill be stored in the database
const userSchema = mongoose.Schema({
    firstName: { 
        type: String,
        required: true,
        validate: /^[a-zA-Z ]{3,30}$/
    },
    lastName: {
        type: String,
        required: true,
        validate: /^[a-zA-Z ]{3,30}$/
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},{
    //Applying time stamp for the data
    timestamps: true
});

module.exports = mongoose.model('EmployeePayroll',userSchema);


//Encrypting password
userSchema.pre("save",async function(next){
    //This will hash the password if the password is modified by the user in future
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

const registerUser = mongoose.model('registerUser',userSchema)

class userModel{
    /**
     * @description registering employee in the database
     * @param {*} userData 
     * @param {*} callback 
     */
    create = (userData, callback) =>{
        const userDetails = new registerUser({
            firstName: userData.firstName,
            lastName: userData.lastName,
            emailId: userData.emailId,
            password: userData.password
        });
        userDetails.save(callback)
    };

    /**
     * @description logging in employee 
     * @param {*} loginInput 
     * @param {*} callback 
     */
     login = (loginInput, callback) =>{
        registerUser.findOne({'emailId':loginInput.emailId},(error,data)=>{
            if(error){
                return callback(error,null);
            }else if (!data){
                return callback("Invalid credentails",null)
            }
            return callback(null, data);
        })
    }
}

module.exports = new userModel();
