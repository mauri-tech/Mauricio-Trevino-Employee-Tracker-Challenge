# Employee Tracker

This project is a command-line application built using Node.js, Inquirer, and MySQL. It allows business owners to manage their company's employee database by performing various operations such as viewing and managing departments, roles, and employees.

## Project Details

- **Author:** Mauricio Trevino
- **Email:** mauricio.trevinon91@gmail.com
- **GitHub Repo:** [https://github.com/mauri-tech/Mauricio-Trevino-Employee-Tracker-Challenge](https://github.com/mauri-tech/Mauricio-Trevino-Employee-Tracker-Challenge)
- **GitHub:** [https://github.com/mauri-tech](https://github.com/mauri-tech)

## User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business


## Acceptance Criteria

The application should meet the following criteria:

1. Present the user with the following options when starting the application:
   - View all departments
   - View all roles
   - View all employees
   - Add a department
   - Add a role
   - Add an employee
   - Update an employee role

2. When the user chooses to view all departments, display a formatted table showing department names and department IDs.

3. When the user chooses to view all roles, display the job title, role ID, department, and salary for each role in a formatted table.

4. When the user chooses to view all employees, display a formatted table showing employee data, including employee IDs, first names, last names, job titles, departments, salaries, and managers.

5. When the user chooses to add a department, prompt them to enter the name of the department and add it to the database.

6. When the user chooses to add a role, prompt them to enter the name, salary, and department for the role and add it to the database.

7. When the user chooses to add an employee, prompt them to enter the employee's first name, last name, role, and manager, and add the employee to the database.

8. When the user chooses to update an employee role, prompt them to select an employee to update and their new role, and update this information in the database.

## Getting Started

To run the application, you will need to have the following installed:

- Node.js
- MySQL2 package
- Inquirer package
- console.table package

1. Clone the GitHub repository: [https://github.com/mauri-tech/Mauricio-Trevino-Employee-Tracker-Challenge](https://github.com/mauri-tech/Mauricio-Trevino-Employee-Tracker-Challenge)

2. Install the dependencies by running the following command:

npm install


3. Set up your MySQL database and update the database credentials in the code.

4. Create and populate the database by running the following command:

npm run seeds


5. Start the application by running the following command:


## Walkthrough Video

A walkthrough video demonstrating the functionality of the application is available at [VIDEO_LINK](https://drive.google.com/file/d/1z1cyRmaaX76cpwW4lWt1bh8aajqRo6wA/view).
