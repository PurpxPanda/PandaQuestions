// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const process = require('process');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions for your project:",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage instructions for your project:",
    },
    {
      type: "list",
      name: "license",
      message: "Please choose a license for your project:",
      choices: ["MIT", "GNU GPLv3", "Apache License 2.0", "ISC"],
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
  ];
  
// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("README.md file generated successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
        const markdown = generateMarkdown(data);`
// Function call to initialize app
init();
