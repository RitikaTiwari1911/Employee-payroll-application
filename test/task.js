let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');
let server = require('../server');

//Assertion style
chai.should();

chai.use(chaiHttp);

describe('Employee Payroll', () =>{
    /**
     * Test  the POST route for new employee
     */

    describe("POST/registerEmp", () => {
         it("This test should pass when user is trying to register with a fresh email id", (done)=>{
             const task = {
                firstName: "Raj",
                lastName: "Chauhan",
                emailId: "rajch123475@gmail.com",
                password: "stringraj1234"
             }
             chai.request(server)
             .post('/empPayroll/registerEmp')
             .send(task)
             .end((error, res) => {
                    //response.should.have.status(200);
                    res.should.be.a("object");
                    res.body.should.have.property("success").eql(true);
                    res.body.should.have.property("message").eql('New employee added!!');
                    //res.body.have.property("data").eql(data);
                    if(error){
                        return done(error);
                    }
            done();
            });
         });
    })

    /**
     * This test should pass when the employee is already registered
     */
    describe("POST/registerEmp", () => {
        it("This test should pass when the user is trying to register with the already registered email id", (done)=>{
            const task = {
                firstName: "Mahima",
                lastName: "Agarwal",
                emailId: "mahima152@gmail.com",
                password: "string12345"
            }
            chai.request(server)
            .post('/empPayroll/registerEmp')
            .send(task)
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
            const task = {
                emailId: "rajch123475@gmail.com",
                password: "stringraj1234"
            }
            chai.request(server)
            .post('/empPayroll/empLogin')
            .send(task)
            .end((error,res)=>{
                res.should.be.a('object');
                res.body.should.have.property("success").eql(true);
                res.body.should.have.property("message").eql("Login successful!");
                res.body.should.have.property("data");
            done();    
            });
        });
    })
})

