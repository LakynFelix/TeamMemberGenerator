
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile } = require('./dist/generate-site.js');
const  employeeArray = [];

const promptManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your Managers Name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your ID number? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your ID ');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officenumber',
        message: 'What is your office number? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
        }
      },
       {
        type: "input",
        name: "linkemail",
        message: "Please enter your email address (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("You need enter a email address (Required)");
            return false;
          }
        },
      },
      {
        type: 'list',
        name: 'addEmployee',
        message: 'What you like to add an Employee to your team?',
        choices: ['Engineer', 'Intern', 'None']
    }
    ]) .then(managerData => {
      const { name, id, email, officeNumber, addEmployee } = managerData;
      const manager = new Manager (name, id, email, officeNumber);

      employeeArray.push(manager);

      if (addEmployee === "Engineer") {
          return promptEngineer();
      } else if (addEmployee === "Intern") {
          return promptIntern();
      } else {
          return employeeArray;
      }

  })
};

      


