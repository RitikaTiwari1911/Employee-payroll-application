let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');
let server = require('../server');

//Assertion style
chai.should();

chai.use(chaiHttp);

describe('Employee Payroll', () =>{
    /**
     * Test  the POST route
     */

    describe("POST/registerEmp", () => {
         it("It should POST a task", (done)=>{
             const task = {
                firstName: "Ayushi",
                lastName: "Thapa",
                emailId: "ayu123@gmail.com",
                password: "string1234"
             }
             chai.request(server)
             .post('/registerEmp')
             .send(task)
             .end((err, response) => {
                    //response.should.have.status(200);
                    response.should.have.a("object");
                    response.should.have.property("firstName").eq("Ayushi");
                    response.should.have.property("lastName").eq("Thapa");
                    response.should.have.property("emailId").eq("ayu123@gmail.com");
                    response.should.have.property("password").eq("string1234");
                    response.should.have.property("success").eq(true);
                    response.should.have.property("message").eq("New employee added!!");
            done();
            });
         });
    })


})
