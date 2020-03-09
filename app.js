const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const outputPath = path.resolve(__dirname, 'output', 'team.html')
const render = require('./lib/htmlRenderer')
let employees = []
let employeeId = []


const createEngineer = () => {
	inquirer.prompt([
		{
			type: 'input',
			message: 'What is your engineer\'s name?',
			name: 'name'
		},
		{
			type: 'number',
			message: 'What is your engineer\'s ID number?',
			name: 'id',
			
		},
		{
			type: 'input',
			message: 'What is your engineer\'s email address?',
			name: 'email'
		},
		{
			type: 'input',
			message: 'What is your engineer\'s GitHub user name?',
			name: 'github'
		}
	]).then((prompt) => {
		//CREATE ENGINEER USING USER INPUT 
		const newEngineer = new Engineer(prompt.name, prompt.id, prompt.email, prompt.github)
    
		//SAVE ENGINEER TO AN ARRAY
		employees.push(newEngineer)
		employeeId.push(prompt.id)
    
		//start over again with optionsPrompt()
		optionsPrompt()
	})
}
    
    
// THIS PROMPT COLLECTS USER DATA FOR THE INTERN 
const createIntern = () => {
	inquirer.prompt([
		{
			type: 'input',
			message: 'PLEASE ENTER INTERN NAME HERE',
			name: 'name'
		},
		{
			type: 'number',
			message: 'PLEASE ENTER INTERN ID NUMBER',
			name: 'id',
		},
		{
			type: 'input',
			message: 'PLEASE ENTER INTERN EMAIL ADRESS',
			name: 'email'
		},
		{
			type: 'input',
			message: 'PLEASE ENTER INTERN SCHOOL NAME',
			name: 'school'
		}
	]).then((prompt) => {
		const newIntern = new Intern(prompt.name, prompt.id, prompt.email, prompt.school)
    
		employees.push(newIntern)
		employeeId.push(prompt.id)
    
		optionsPrompt()
	})
}
    
    
// THIS FUNCTION HANDLES FUNCTIONALITY OF THE OPTIONS MENUE
const optionsPrompt = () => {
	inquirer.prompt([
		
		{
			type: 'list',
			message: 'PLEASE CHOOSE AN EMPLOYEE TO CREATE OR FINALIZE YOUR INFORMATION',
			choices: ['Engineer', 'Intern', 'Finalize Team'],
			name: 'action'
		}
	]).then((prompt) => {
		switch (prompt.action) {
		case 'Engineer':
			createEngineer()
			break
		case 'Intern':
			createIntern()
			break
		default:
			
			fs.writeFile(outputPath, render(employees), function (err) {
				if (err) {
					throw err
				}
			})
			console.log('YOUR FILE HAS BEEN WRITTEN TO THE OUTPUT FOLDER')
			break
		}
	})
}
    
// THIS FUNCTION BEGINS THE PROMPT FLOW FOR USER INPUT
const promptUser = () => {

	//  THE FIRST PROMPT COLLECTS DATA FOR THE MANAGER
	inquirer.prompt([
		{
			type: 'input',
			message: 'PLEASE ENTER TEAM MANAGER NAME ',
			name: 'name'
		},
	
		{
			type: 'number',
			message: 'PLEASE ENTER MANAGER ID NUMBER',
			name: 'id',
		},
		
		{
			type: 'input',
			message: 'PLEASE ENTER MANAGER EMAIL ADDRESS',
			name: 'email'
		},
		
		{
			type: 'number',
			message: 'PLEASE ENTER MANAGERS OFFICE TELEPHONE NUMBER',
			name: 'officeNumber'
		},
		{
			type: 'list',
			message: 'PLEASE CHOOSE AN EMPLOYEE TO CREATE OR FINALIZE YOUR INFORMATION',
			choices: ['Engineer', 'Intern', 'Finalize Team'],
			name: 'action'
		}
	]).then((prompt) => {

		// MANAGER DATA IS PASSED INTO CONSTRUCTOR FUNCTION
		const newManager = new Manager(prompt.name, prompt.id, prompt.email, prompt.officeNumber)
        
		// THE NEW MANAGER INFORMATION IS PUSHED TO AN ARRAY
		employees.push(newManager)
		employeeId.push(prompt.id)
        
		//IF USER CHOOSES.....
		switch (prompt.action) {
		case 'Engineer':
			createEngineer()
			break
		case 'Intern':
			createIntern()
			break
		default:
			// WRITE HTML FILE USING EMPLOYEE INFORMATION 
			fs.writeFile(outputPath, render(employees), function (err) {
				if (err) {
					throw err
				}
			})
			console.log('YOUR FILE HAS BEEN WRITTEN TO THE OUTPUT FOLDER')
			break
		}
	}).catch(Error)
}
    
// THIS FUNCTION KICKS OFF THE ENTIRE USER EXPERIENCE     
promptUser()