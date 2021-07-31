const { writeFile } = require('./dist/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');


const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
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
          } else {
            console.log('Please enter your office number ');
            return false;
          }
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
        type: 'checkbox',
        name: 'role',
        message: 'What is your main role ?',
        choices: ['Manager', 'Emplooyee', 'Engineer', 'Intern']
      },

      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddEmployee) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .catch(err => {
    console.log(err);
  });