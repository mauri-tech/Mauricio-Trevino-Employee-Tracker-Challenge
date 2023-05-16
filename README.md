# Team Profile Generator

The Team Profile Generator is a Node.js command-line application that generates an HTML webpage displaying summaries for each member of a software engineering team. This application makes use of the Inquirer package (version 8.2.4) for collecting user input.

## Installation

To install the necessary dependencies, use the following command:

npm install inquirer@8.2.4

## Usage

To start the application, run the following command in your project folder:

node index.js

You will be prompted with a series of questions about each team member. Provide the necessary information for each member, such as their name, role, ID, email, and any role-specific details (e.g., office number for managers, GitHub username for engineers, or school name for interns).

Once you have entered the information for all team members, the application will generate an HTML file named `team.html` in the output directory. This file will display the summaries of each team member, including their name, role, ID, email, and role-specific details.

## Testing

Unit tests have been implemented for each part of the code to ensure its functionality and maintainability. To run the tests, use the following command:

npm test


All tests should pass successfully, indicating that the code is working as intended.

## Walkthrough Video

Please refer to the following walkthrough video that demonstrates the functionality of the Team Profile Generator and shows all the tests passing:

[Team Profile Generator Walkthrough Video](..)

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or inquiries, please contact me at [mauricio.trevino91@gmail.com](mailto:mauricio.trevinon91@gmail.com).


