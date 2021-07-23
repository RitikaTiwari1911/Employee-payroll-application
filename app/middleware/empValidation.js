/**
 * @module       middleware
 * @file         empValidation.js
 * @description  holds the user input validation regex
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        14/06/2021  
-----------------------------------------------------------------------------------------------*/

const joi = require('joi');

const empValidation = joi.object({
    firstName: joi.string().min(3).max(30).pattern(new RegExp('^[a-zA-Z ]{3,30}$')).required(),
    lastName: joi.string().min(3).max(30).pattern(new RegExp('^[a-zA-Z ]{3,30}$')).required(),
    department: joi.string().required(),
    salary: joi.string().required(),
    emailId: joi.string().email().required().pattern(new RegExp()),
});

module.exports = {empValidation}; 