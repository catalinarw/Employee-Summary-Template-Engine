const Employee = require('../lib/Employee')

class Intern extends Employee {

	constructor(name, id, email, school) {
		super(name, id, email, 'Intern')	
		this.school = school
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
     
	getSchool() {
		return this.school
	}  
	printInfo() {
		console.log(`This Employee has ${this.name} and ${this.id}`)
	}
}
module.exports = Intern