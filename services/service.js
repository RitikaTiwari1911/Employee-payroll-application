const EmpPayrollModel = require('../app/models/model.js');

class EmpService{
    create = (empData, callback) => {
        EmpPayrollModel.create(empData, (error, data) => {
            if(error){
                return callback(error, null);
            }
            return callback(null, data);
        })
    }

  //  findAll = (callback) => {
  //      EmpPayrollModel.findAll((error, data) => {
  //          if(error){
  //              return callback(error, null);
  //          }
  //          return callback(null, data);
  //      })
  //  }
}

module.exports = new EmpService();


