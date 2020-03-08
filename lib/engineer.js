const Employee = require("../lib/Employee");

class Engineer extends Employee {
    
    constructor(name, id, title, email, github) {
        
        super(name, id, "Engineer", email);
        // setting the remaining arguments on to the class itself:
        this.github = github;
       
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
       getGithub() {
        return this.github
       }
}
module.exports = Engineer