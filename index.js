
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile } = require('./dist/generate-site.js');
const { name } = require('ejs');
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
            console.log('Please enter your Name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your ID? (Required)',
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
    }
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
      }    
      {
        type: 'checkbox',
        name: 'addEmployee',
        message: 'What you like to add another Employee to your team?',
        choices: ['Engineer', 'Intern', 'None']
      }
      ])
      .then (engineerData => {
        const { name, id, email, officeNumber, github, addEmployee } = engineerData;
        const engineer = new Engineer (name, id, email, officeNumber, github);
      
        employeeArray.push(engineer);
      
        if (addEmployee === "Engineer") {
          return promptEngineer();
        } else if (addEmployee === "Intern") {
          return promptIntern();
        } else {
          return employeeArray;
        }
      });
          }


const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your Name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your Name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your ID');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officenumber',
      message: 'What is your office Number? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
      }
    },
  }
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
    }   
{
  type: 'input',
  name: 'github',
  message: 'Please enter your GitHub username.',
  validate: githubInput => {
      if (githubInput) {
          return true;
      } else {
          console.log("Please enter your GitHub username")
      }
  },
},
{
  type: 'checkbox',
  name: 'addEmployee',
  message: 'What you like to add another Employee to your team?',
  choices: ['Engineer', 'Intern', 'None']
}
])
.then (engineerData => {
  const { name, id, email, officeNumber, github, addEmployee } = engineerData;
  const engineer = new Engineer (name, id, email, officeNumber, github);

  employeeArray.push(engineer);

  if (addEmployee === "Engineer") {
    return promptEngineer();
  } else if (addEmployee === "Intern") {
    return promptIntern();
  } else {
    return employeeArray;
  }
});
    }


    const promptIntern = () => {
        return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your Name? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your Name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is your ID? (Required)',
          validate: nameInput => {
              if(nameInput) {
                return true;
              } else {
                console.log('Please enter your ID');
                return false;
              }
            }
          }
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
              }
        }
        {
          type: 'input',
          name: 'school', 
          message: 'What is the name of your school? (Required)', 
          validate: nameInput => {  
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your school name');
              return false;
            }
          
          },
        }
        {
         type: 'checkbox',
           name: 'addEmployee',
          message: 'What you like to add another Employee to your team?',
          choices: ['Engineer', 'Intern', 'None']
        }
        ])
        .then(internData => {
          const { name, id, email, school, addEmployee } = internData;
          const intern = new Intern (name, id, email, school);

          employeeArray.push(intern);

          if (addEmployee === "Engineer") {
            return promptEngineer();
          } else if (addEmployee === "Intern") {
            return promptIntern();
          } else {
            return employeeArray;
          }
        });
