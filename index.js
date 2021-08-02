const inquirer = require("inquirer");
const generateHtml = require("./src/page-template");
const writeFile = require("./dist/generate-site.js");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const employeeArray = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Managers Name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a Name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your Managers ID? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a valid  ID ");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officenumber",
        message: "What is your Managers office number? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "linkemail",
        message: "Please enter your Managers email address (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("You need to enter a valid  email address (Required)");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "addEmployee",
        message: "What you like to add another Employee to your team?",
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((managerData) => {
      const { name, id, email, officeNumber, addEmployee } = managerData;
      const manager = new Manager(name, id, email, officeNumber);
      employeeArray.push(manager);

      if (addEmployee[0] === "Engineer") {
        return promptEngineer();
      } else if (addEmployee[0] === "Intern") {
        return promptIntern();
      } else {
        return employeeArray;
      }
    });
};
const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Engineers Name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your Name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your Engineers ID? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a valid ID");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "linkemail",
        message: "Please enter your Engineers email address (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("You need enter a  valid email address (Required)");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your Engineers GitHub username.",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter a valid GitHub username");
          }
        },
      },
      {
        type: "checkbox",
        name: "addEmployee",
        message: "What you like to add another Employee to your team?",
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((engineerData) => {
      const { name, id, email, github, addEmployee } = engineerData;
      const engineer = new Engineer(name, id, email, github);
      employeeArray.push(engineer);
      if (addEmployee[0] === "Engineer") {
        return promptEngineer();
      } else if (addEmployee[0] === "Intern") {
        return promptIntern();
      } else {
        return employeeArray;
      }
    });
};
const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Interns Name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your Name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your Interns ID? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "linkemail",
        message: "Please enter your Intern email address (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("You need enter a valid email address (Required)");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the name of your Interns school? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your school name");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "addEmployee",
        message: "What you like to add another Employee to your team?",
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((internData) => {
      const { name, id, email, school, addEmployee } = internData;
      const intern = new Intern(name, id, email, school);
      employeeArray.push(intern);
      if (addEmployee[0] === "Engineer") {
        return promptEngineer();
      } else if (addEmployee[0] === "Intern") {
        return promptIntern();
      } else {
        return employeeArray;
      }
    });
};

promptManager()
  .then((employeeArray) => {
    return generateHtml(employeeArray);
  })
  .then((data) => {
    console.log("Your Crew has been created");
    return writeFile(data);
  })
  .catch((err) => {
    console.log(err);
  });
