const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// output folder
const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

// prompts go here somehwere, and functions

// prompt user for info about the team manager
    // inquirer
// prompt user for information about a team member
    //would you like to add another team member?
    // if yes prompt user for information about the new team member
    // if no, 
    //.then(data) use the data collected to seed into html files