const Employee = require("../lib/Employee");

class Manager extends Employee {
    
    constructor(name, id, title, officeNumber) {
        // passing the class we extend from (Product) the arguments it needs:
        super(name, id, title);
        // setting the remaining arguments on to the class itself:
        this.officeNumber = officeNumber;
       
    }

    getRole() {
        return this.title;
    }
  
};