
class Employee {
    constructor(name, id, title, email) {
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

   getEmail() {
    return this.email;
   }

   getRole () {
    return this.title;
   }
 
   printInfo() {
    console.log(`This Employee has ${this.name} and ${this.id}`);
  }
};

module.exports = Employee