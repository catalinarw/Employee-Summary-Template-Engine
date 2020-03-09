const Employee = require('../lib/Employee')

class Manager extends Employee {
    
	constructor(name, id, email, officeNumber) {
		
		super(name, id, email, 'Manager')
		
		this.officeNumber = officeNumber
	}
	getName() {
  
		return this.name
	}
    
	getId() {
		return this.id
	}
    
	getRole () {
		return this.title
	}
	getEmail() {
		return this.email
	}
    
	getOfficeNumber() {
		return this.officeNumber
	}
     
	printInfo() {
		console.log(`This Employee has ${this.name} and ${this.id}`)
	}
  
}
module.exports = Manager