const Employee = require("../lib/Employee");

class Intern extends Employee {
    
    constructor(name, id, title, school, email) {
        // passing the class we extend from (Product) the arguments it needs:
        super(name, id, "Intern", email);
        // setting the remaining arguments on to the class itself:
        this.school = school;
       
    }
    getName() {
  
        return this.name;
       }
    
       getId() {
        return this.id;
       }
    
       getEmail() {
        return this.email;
       }
    
       getRole () {
        return this.title;
       }
     
       getSchool() {
           return this.school;
       }
       
       printInfo() {
        console.log(`This Employee has ${this.name} and ${this.id}`)
       }
};
module.exports = Intern