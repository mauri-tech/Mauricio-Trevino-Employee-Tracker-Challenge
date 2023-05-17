const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD, // use environment variable
    database: 'tracker_db'
});

connection.connect(err => {
    if (err) console.log(err);
    else InquirerPrompt();
});

const InquirerPrompt = async () => {
    try {
        const { choices } = await inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add department',
                    'Add role',
                    'Add employee',
                    'Update employee information',
                    'Exit'
                ]
            }
        ]);

        switch (choices) {
            case "View all departments":
                await showDepartments();
                break;
            case "View all roles":
                await showRoles();
                break;
            case "View all employees":
                await showEmployees();
                break;
            case "Add department":
                await addDepartments();
                break;
            case "Add role":
                await addRoles();
                break;
            case "Add employee":
                await addEmployees();
                break;
            case "Update employee information":
                await updateEmployee();
                break;
            case "Exit":
                connection.end();
                break;
            default:
                console.log("Invalid choice");
                break;
        }
    } catch (err) {
        console.log(err);
    }
};

const showDepartments = async () => {
    try {
        console.log('All departments are showing.');
        const mysql = `SELECT department.id AS id, department.name AS department FROM department`;
        const [rows] = await connection.promise().query(mysql);
        console.table(rows);
        InquirerPrompt();
    } catch (err) {
        console.log(err);
    }
};

const showRoles = async () => {
    try {
        console.log('Show all roles.');
        const mysql = `SELECT roles.id, roles.title, department.name AS department FROM roles LEFT JOIN department ON roles.department_id = department.id`;
        const [rows] = await connection.promise().query(mysql);
        console.table(rows);
        InquirerPrompt();
    } catch (err) {
        console.log(err);
    }
};

const addRoles = async () => {
  try {
      const { roles, salary } = await inquirer.prompt([
          {
              type: 'input',
              name: 'roles',
              message: "What do you want to add?",
          },
          {
              type: 'input',
              name: 'salary',
              message: 'What is your yearly salary?',
          }
      ]);
      const parameters = [roles, salary];
      const roles_var = `SELECT name, id FROM department`;
      const [data] = await connection.promise().query(roles_var);
      const departments = data.map(({ name, id }) => ({ name: name, value: id }));
      const { department_id } = await inquirer.prompt([
          {
              type: 'list',
              name: 'department_id',
              message: "What department is this role in?",
              choices: departments
          }
      ]);
      parameters.push(department_id);
      const mysql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
      await connection.promise().query(mysql, parameters);
      console.log(`Added ${roles} to roles`);
      showRoles();
  } catch (err) {
      console.log(err);
  }
};


const showEmployees = async () => {
    try {
        console.log('All employees are showing.');
        const mysql = `SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, CONCAT(mgr.first_name, mgr.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee mgr ON employee.manager_id = mgr.id`;
        const [rows] = await connection.promise().query(mysql);
        console.table(rows);
        InquirerPrompt();
    } catch (err) {
        console.log(err);
    }
};

const updateEmployee = async () => {
    try {
        const employeemysql = `SELECT * FROM employee`;
        const [data] = await connection.promise().query(employeemysql);
        const employees = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));
        const { name } = await inquirer.prompt([
            {
                type: 'list',
                name: 'name',
                message: 'Which employee do we want to update?',
                choices: employees
            }
        ]);
        const parameters = [];
        parameters.push(name);
        const role_var = `SELECT * FROM role`;
        const [dataRoles] = await connection.promise().query(role_var);
        const roles = dataRoles.map(({ id, title }) => ({ name: title, value: id }));
        const { role } = await inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What is the new role?',
                choices: roles
            }
        ]);
        parameters.push(role);
        let employee = parameters[0]
        parameters[0] = role
        parameters[1] = employee
        const mysql = `UPDATE employee SET role_id = ? WHERE id = ?`;
        await connection.promise().query(mysql, parameters);
        console.log('Role has been updated.');
        showEmployees();
    } catch (err) {
        console.log(err);
    }
};

const addDepartments = async () => {
    try {
        const { department } = await inquirer.prompt([
            {
                type: 'input',
                name: 'department',
                message: 'What department do you want to add?',
            }
        ]);
        const mysql = `INSERT INTO department (name) VALUES (?)`;
        await connection.promise().query(mysql, department);
        console.log(`Added ${department} to departments`);
        showDepartments();
    } catch (err) {
        console.log(err);
    }
};

const addEmployees = async () => {
    try {
        const { first_name, last_name } = await inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Your First Name?',
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Your Last Name?',
            }
        ]);
        const parameters = [first_name, last_name];
        const roles_var = `SELECT roles.id, roles.title FROM roles`;
        const [data] = await connection.promise().query(roles_var);
        const roles = data.map(({ id, title }) => ({ name: title, value: id }));
        const { role } = await inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What is your role?',
                choices: roles
            }
        ]);
        parameters.push(role);
        const mysql = `INSERT INTO employee (first_name, last_name, role_id) VALUES (?,?,?)`;
        await connection.promise().query(mysql, parameters);
        console.log(`Added ${first_name} ${last_name} to employees`);
        showEmployees();
    } catch (err) {
        console.log(err);
    }
};

