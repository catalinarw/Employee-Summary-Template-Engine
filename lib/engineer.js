const Employee = require("../lib/Employee");

class Engineer extends Employee {
    
    constructor(name, id, title, github, email) {
        
        super(name, id, title, email);
        // setting the remaining arguments on to the class itself:
        this.github = github;
       
    }
    
    getGithub() {
        return this.github;
    }
    getRole() {
       return this.title; 
    }
  
}