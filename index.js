const generateFile = require("./src/generateTemplate")

// Packages require
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//Module exports
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array of objects created from user inputs
const members = [];

// Prompt for Manager
const promptManager = () => {
     
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your managers name?',
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(' Please enter your manager name!');
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter employee ID for the manager:',
          validate: (idInput) => {
            if (!isNaN(idInput)) {
              return true;
            } else {
              console.log(' Please enter your manager ID number!');
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter email address for the manager:',
          validate: function (emailInput) {
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailValid.test(emailInput)) {
                return " Please enter a valid email address!"
            }
            return true
            },
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'Enter the office number:',
          validate: (officeNumberInput) => {
            if (!isNaN(officeNumberInput)) {
              return true;
            } else {
              console.log(' Please enter an office number!');
              return false;
            }
          },
        },
      ])
      .then((managerData) => {
        console.log(managerData)
        // Destructuring assignment for manager inputs object
        const { name, id, email, officeNumber } = managerData;
        //Instantiation of Manager class 
        const teamMember = new Manager(name, id, email, officeNumber);
        
        members.push(teamMember);
                               
      });
  };

  // Prompt for Engineer
  const promptEngineer = () => {
    
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your engineers name?',
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(' Please enter your engineers name!');
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter employee ID for the engineer:',
          validate: (idInput) => {
            if (!isNaN(idInput)) {
              return true;
            } else {
              console.log(' Please enter an ID number!');
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter email address for the engineer:',
          validate: function (emailInput) {
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailValid.test(emailInput)) {
                return " Please enter a valid email address!"
                }
            return true
            },
        },
        {
          type: 'input',
          name: 'githubUser',
          message: 'Enter the engineers github username:',
          validate: (githubInput) => {
            if (githubInput) {
              return true;
            } else {
              console.log(' Please enter a username!');
              return false;
            }
          },
        },
      ])
      .then((engineerData) => {
        // Destructuring assignment for engineer inputs object
        const { name, id, email, githubUser } = engineerData;
        //Instantiation of Engineer class 
        const teamMember = new Engineer (name, id, email, githubUser);
  
        members.push(teamMember);
        // Call function to create nex team member
        nextMember();       
    });
  };

  // Prompt for Intern
  const promptIntern = () => {
     
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your interns name?',
          validate: (name) => {
            if (name) {
              return true;
            } else {
              console.log(' Please enter a name!');
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter employee ID for the intern:',
          validate: (id) => {
            if (!isNaN(id)) {
              return true;
            } else {
              console.log(' Please enter an ID number!');
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter email address for the intern:',
          validate: function (email) {
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailValid.test(email)) {
                return " Please enter a valid email address!"
                }
            return true
            },
        },
        {
          type: 'input',
          name: 'school',
          message: 'Enter the interns school:',
          validate: (school) => {
            if (school) {
              return true;
            } else {
              console.log(' Please enter a school!');
              return false;
            }
          },
        },
      ])
      .then((internData) => {
        // Destructuring assignment for intern inputs object
        const { name, id, email, school } = internData;
        //Instantiation of Intern class
        const teamMember = new Intern(name, id, email, school);
  
        members.push(teamMember);
        // Call function to create next team member
        nextMember();
      });
  };

  //  Add next Member
  const nextMember = () => {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'nextTeamMember',
          message: 'Please choose if you want to add a team member: ',
          choices: ['Engineer', 'Intern', 'No more member to add'],
        },
      ])
      .then((data) => {
        let {nextTeamMember} = data;

        if (nextTeamMember === 'Engineer') {
          promptEngineer();
        } else if (nextTeamMember === 'Intern') {
          promptIntern();
        } else {
          // Call function to create html file
          writeHtml();
        }
    });
  };

// Function to create index.html file
function writeHtml(){

  const htmlGenerated = generateFile(members)
    
    fs.writeFile('./dist/index.html', htmlGenerated, (err) => {
      if (err) {
        return console.log(err);
      }
        // Then alert the user the file has been successfully generated
        console.log('My Team Profile page  has been created!');
      });
    
    };
    
    // Call function
    promptManager()
     .then(nextMember)