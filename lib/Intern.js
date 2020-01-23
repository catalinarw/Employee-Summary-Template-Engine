const Employee = require("../lib/Employee");

class Intern extends Employee {
    
    constructor(name, id, title, school, email) {
        // passing the class we extend from (Product) the arguments it needs:
        super(name, id, title, email);
        // setting the remaining arguments on to the class itself:
        this.school = school;
       
    }
    
    getSchool() {
        return this.school;
    }
    getRole() {
       return this.title;
    }
  
};