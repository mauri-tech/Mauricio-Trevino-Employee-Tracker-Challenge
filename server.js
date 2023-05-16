const fs = require('fs');
const inquirer = require('inquirer');
const htmlGenerator = require('./src/htmlGenerator');
const teamMembers = [];
const manager = require('./library/manager');
const engineer = require('./library/engineer');
const intern = require('./library/intern');

const generateManager = async () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the manager's name?",
      validate: (input) => input !== '' || 'Please enter the team manager name',
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's employee ID?",
      validate: (input) =>
        input !== '' || 'Please enter the team manager employee ID',
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the manager's email address?",
      validate: (input) =>
        input !== '' || 'Please enter the team manager email address',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number?",
      validate: (input) =>
        input !== '' || 'Please enter the team manager office number',
    },
  ];

  const managerInfo = await inquirer.prompt(questions);
  const { name, id, email, officeNumber } = managerInfo;
  const newManager = new manager(name, id, email, officeNumber);
  teamMembers.push(newManager);
  console.log(newManager);
  addEmployee();
};

const generateEngineer = async () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name?",
      validate: (input) =>
        input !== '' || 'Please enter the team engineer name',
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the engineer's employee ID?",
      validate: (input) =>
        input !== '' || 'Please enter the team engineer employee ID',
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email address?",
      validate: (input) =>
        input !== '' || 'Please enter the team engineer email address',
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's GitHub user name?",
      validate: (input) =>
        input !== '' || 'Please enter the engineer GitHub user',
    },
  ];

  const engineerInfo = await inquirer.prompt(questions);
  const { name, id, email, github } = engineerInfo;
  const newengineer = new engineer(name, id, email, github);
  teamMembers.push(newengineer);
  console.log(newengineer);
  addEmployee();
};

const generateIntern = async () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the intern's name?",
      validate: (input) => input !== '' || 'Please enter the team intern name',
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the intern's employee ID?",
      validate: (input) =>
        input !== '' || 'Please enter the team intern employee ID',
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the intern's email address?",
      validate: (input) =>
        input !== '' || 'Please enter the team intern email address',
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the intern'school name?",
      validate: (input) =>
        input !== '' || 'Please enter the intern school name',
    },
  ];

  const internInfo = await inquirer.prompt(questions);
  const { name, id, email, school } = internInfo;
  const newintern = new intern(name, id, email, school);
  teamMembers.push(newintern);
  console.log(newintern);
  addEmployee();
};

generateManager();

async function addEmployee() {
  const employeeTypes = {
    manager: generateManager,
    Engineer: generateEngineer,
    Intern: generateIntern,
    None: () =>
      fs.writeFileSync(
        './public/teamOverview.html',
        htmlGenerator(teamMembers)
      ),
  };

  const { employeeType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      message: 'Do you want to add another team member?',
      choices: Object.keys(employeeTypes),
    },
  ]);

  const generateEmployee = employeeTypes[employeeType];
  if (generateEmployee) {
    await generateEmployee();
  } else {
    console.log('Invalid input');
  }
}