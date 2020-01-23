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