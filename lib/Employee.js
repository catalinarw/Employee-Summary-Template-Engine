
class Employee {
    constructor(name, id, email, title) {
        // attaching all of the dynamic values to the resulting object:
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }

   getName() {
  
    return this.name;
   }

   getId() {
    return this.id;
   }

   getRole () {
       if (this.title) {
        return this.title;

       } else {
           return "Employee"
       }
   }
   getEmail() {
    return this.email;
   }

 
   printInfo() {
    console.log(`This Employee has ${this.name} and ${this.id}`);
  }
};

module.exports = Employee