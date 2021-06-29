let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');
let server = require('../server');
const testData = require("./user.data.json");

//Assertion style
chai.should();

chai.use(chaiHttp);

describe('Employee Payroll', () =>{
    /**
     * Test  the POST route for new employee
     */

    describe("POST/registerEmp", () => {
         it("This test should pass when user is trying to register with a fresh email id", (done)=>{
             const employeeRegistration = testData.registerEmp;
             chai.request(server)
             .post('/empPayroll/registerEmp')
             .send(employeeRegistration)
             .end((error, res) => {
                    //response.should.have.status(200);
                    res.should.be.a("object");
                    res.body.should.have.property("success").eql(true);
                    res.body.should.have.property("message").eql('New employee added!!');
                    //res.body.have.property("data").eql(data);
                
            done();
            });
         });
    })

    /**
     * This test should pass when the employee is already registered
     */
    describe("POST/registerEmp", () => {
        it("This test should pass when the user is trying to register with the already registered email id", (done)=>{
            const employeeRegistrationNeg = testData.registerEmpNegative
            chai.request(server)
            .post('/empPayroll/registerEmp')
            .send(employeeRegistrationNeg)
            .end((error, res) => {
                   //response.should.have.status(400);
                   res.should.be.a("object");
                   res.body.should.have.property("success").eql(false);
                   res.body.should.have.property("message").eql('Email already exists!');
                   if(error){
                       return done(error);
                   }
           done();
           });
        });
   })

   /**
    * This test should pass for employee login
    * It will pass when the employee is already registered and it's details are stored in the database
    */
   describe("POST/loginEmp",() =>{
        it("This test should pass when the user is logging in with the correct email id and the password",(done)=>{
            const empLoginData = testData.empLogin
            chai.request(server)
            .post('/empPayroll/empLogin')
            .send(empLoginData)
            .end((error,res)=>{
                //console.log(res);
                res.should.be.a('object');
                res.body.should.have.property("success").eql(true);
                res.body.should.have.property("message").eql("Login successful!");
                res.body.should.have.property("data");
            done();    
            });
        });
    })

     /**
    * This test should pass when the employee login credentials are wrong
    * It will pass when the employee is already registered and it's details are stored in the database
    */
   describe("POST/loginEmp",() =>{
    it("This test should pass when the user is logging in with the wrong email id or the password",(done)=>{
        const empLoginDataNeg = testData.empLoginNegative
        chai.request(server)
        .post('/empPayroll/empLogin')
        .send(empLoginDataNeg)
        .end((error,res)=>{
            res.should.have.status(400);
            res.should.be.a('object');
            res.body.should.have.property("success").eql(false);
            res.body.should.have.property("message").eql("Invalid credential");
           
        done();    
        });
    });
})

   // /**
   //  * This test should pass when user is trying to retrieve the data of all the employees
   //  */
   // describe("/empPayroll/readAllData",() =>{
   //     it("This test should pass when the user is retrieving the data of all the employees",(done)=>{
   //         chai.request(server)
   //         .get('/empPayroll/readAllData')
   //         .set('token',token)
   //         .end((error,res)=>{
   //             res.should.be.a('object');
   //             res.body.should.have.property("success").eql(true);
   //             res.body.should.have.property("message").eql("Employee information retrieved successfully!");
   //             res.body.should.have.property("data");
   //         done();    
   //         });
   //     });
   // })
})

