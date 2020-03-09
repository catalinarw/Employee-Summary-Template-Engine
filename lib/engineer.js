const Employee = require('../lib/Employee')

class Engineer extends Employee {
    
	constructor(name, id, email, github) {
        super(name, id, email, 'Engineer')
        
		this.github = github
    }
    
	getName() {
  
		return this.name
	}
    
	getId() {
		return this.id
	}
    
	getEmail() {
		return this.email
	}
    
	getRole () {
		return this.title
	}
	getGithub() {
		return this.github
	}
}
module.exports = Engineer