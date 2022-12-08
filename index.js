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
        const { name, id, email, officeNumber } = managerData;
  
        const teamMember = new Manager(name, id, email, officeNumber);

        members.push(teamMember);
                       
      });
  };