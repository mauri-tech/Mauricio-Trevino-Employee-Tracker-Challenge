INSERT INTO department (name)
VALUES
    ('IT'),
    ('Sales'),
    ('Engineering'),
    ('Customer Service'),
    ('Data Science');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Cyber Secerity', 90000, 1),
    ('IT Specialist', 70000, 1),
    ('Customer Sales Solutions', 120000, 2),
    ('Sales Rep', 70000, 2),
    ('Data Engineer', 100000, 3),
    ('Software Engineer', 120000, 3),
    ('Call Center', 65000, 4),
    ('Customer Service', 55000, 4),
    ('Data Scientist', 100000, 5),
    ('Data Engineer', 100000, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('José', 'García', 2,2),
    ('Carlos', 'Hernández', 5, 5),
    ('Juan', 'Martínez', 1, 1),
    ('Francisco', 'López', 1, 2),
    ('Javier', 'González', 3,2),
    ('Antonio', 'Pérez', 1, 5),
    ('Miguel', 'Sánchez', 4, 1),
    ('Rafael', 'Ramírez', 3, 2),
    ('Alejandro', 'Torres', 2,5),
    ('Ricardo', 'Ruiz', 5, 1),
    ('Fernando', 'Romero', 3, 1),
    ('Pablo', 'Alvarez', 4, 4),
    ('Sergio', 'Moreno', 4,null),
    ('Jorge', 'Gutierrez', 2, null),
    ('Alberto', 'Jimenez', 3, null),
    ('Roberto', 'Delgado', 5, null)
