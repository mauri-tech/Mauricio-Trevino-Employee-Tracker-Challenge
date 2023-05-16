INSERT INTO department (id, name)
VALUES 
    (1, 'Marketing'),
    (2, 'Development'),
    (3, 'Finance'),
    (4, 'Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, 'Marketing Manager', 100000, 1),
    (2, 'Marketing Specialist', 80000, 1),
    (3, 'Senior Developer', 150000, 2),
    (4, 'Junior Developer', 120000, 2),
    (5, 'Financial Analyst', 160000, 3),
    (6, 'Accountant', 125000, 3),
    (7, 'Legal Counsel', 250000, 4),
    (8, 'Lawyer', 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'John', 'Smith', 1, NULL),
    (2, 'Michael', 'Johnson', 1, 1),
    (3, 'Emily', 'Davis', 2, NULL),
    (4, 'Daniel', 'Lee', 2, 3),
    (5, 'Sarah', 'Brown', 3, NULL),
    (6, 'Jennifer', 'Clark', 3, 5),
    (7, 'David', 'Garcia', 4, NULL),
    (8, 'Jessica', 'Anderson', 4, 7);