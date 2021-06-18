const joi = require('joi');

const empValidation = joi.object({
    firstName: joi.string().min(3).max(30).pattern(new RegExp('^[a-zA-Z ]{3,30}$')).required(),
    lastName: joi.string().min(3).max(30).pattern(new RegExp('^[a-zA-Z ]{3,30}$')).required(),
    emailId: joi.string().email().required().pattern(new RegExp()),
    password: joi.string().alphanum().min(8).max(30).pattern(new RegExp("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")).required()
});

module.exports = {empValidation}; 